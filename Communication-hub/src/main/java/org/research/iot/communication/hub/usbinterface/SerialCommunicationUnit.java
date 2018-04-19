package org.research.iot.communication.hub.usbinterface;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Enumeration;
import java.util.List;

import org.jboss.logging.Logger;
import org.research.iot.communication.hub.service.AkkaService;
import org.research.iot.communication.hub.service.SerialCommunicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import akka.actor.ActorRef;
import gnu.io.CommPortIdentifier;
import gnu.io.SerialPort;
import gnu.io.SerialPortEvent;
import gnu.io.SerialPortEventListener;

@Service
public class SerialCommunicationUnit implements SerialCommunicationService, SerialPortEventListener {

	private static Logger logger = Logger.getLogger(SerialCommunicationUnit.class);
	private BufferedReader input;
	private OutputStream output;
	private SerialPort serialPort;
	private static final int DATA_RATE = 115200;
	private ActorRef messageProcessorActor;

	public static final int TIME_OUT = 2000;

	@Autowired
	private AkkaService akkaService;

	@Override
	public List<String> getAllCommPorts() {
		List<String> comPorts = new ArrayList<>();
		Enumeration<?> portEnum = CommPortIdentifier.getPortIdentifiers();

		while (portEnum.hasMoreElements()) {
			CommPortIdentifier currPortId = (CommPortIdentifier) portEnum.nextElement();
			comPorts.add(currPortId.getName());
		}
		logger.info("Available COM ports -> " + comPorts);
		return comPorts;
	}

	@Override
	public void startListnerForPayload(String comPort) throws Exception {
		CommPortIdentifier portId = null;
		Enumeration<?> portEnum = CommPortIdentifier.getPortIdentifiers();

		while (portEnum.hasMoreElements()) {
			CommPortIdentifier currPortId = (CommPortIdentifier) portEnum.nextElement();
			if (comPort.equals(currPortId.getName())) {
				portId = currPortId;
			}
		}

		if (portId == null) {
			logger.error("Could not find COM port -> " + comPort);
			throw new Exception("Unable to find com port");
		}

		try {
			logger.debug("Starting COM Listener....");
			serialPort = (SerialPort) portId.open(this.getClass().getName(), TIME_OUT);
			serialPort.setSerialPortParams(DATA_RATE, SerialPort.DATABITS_8, SerialPort.STOPBITS_1,
					SerialPort.PARITY_NONE);

			input = new BufferedReader(new InputStreamReader(serialPort.getInputStream()));
			output = serialPort.getOutputStream();

			messageProcessorActor = akkaService.getMessageProcessorActor();
			serialPort.addEventListener(this);
			serialPort.notifyOnDataAvailable(true);
			logger.debug("COM Listener started!");
		} catch (Exception e) {
			logger.error("Generic Exception Occured -> " + e.getMessage());
			throw new Exception("Generic Exception Occured while starting listener -> " + e.getMessage());
		}

	}

	@Override
	public void sendCommandtoDevice(String command) throws Exception {
		output.write(command.getBytes());
		output.flush();
	}

	@Override
	public void serialEvent(SerialPortEvent oEvent) {
		if (oEvent.getEventType() == SerialPortEvent.DATA_AVAILABLE) {
			logger.info("Event Recieved -> Reading data from COM port");
			try {
				String inputLine = null;
				if (input.ready()) {
					inputLine = input.readLine();
					messageProcessorActor.tell(inputLine, null);
				}
			} catch (Exception e) {
				logger.error("Generic Exception Occured while recieving payload  -> " + e.getMessage());
			}
		}

	}

	@Override
	public void disconnect() {
		try {
			logger.info("Disconnecting device..");
			serialPort.removeEventListener();
			serialPort.close();
			input.close();
			output.close();
		} catch (Exception e) {
			logger.error("Generic Exception Occured while disconnecting device  -> " + e.getMessage());
		}
	}
}
