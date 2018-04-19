package org.research.iot.communication.hub.usbinterface;

import java.util.List;

import org.jboss.logging.Logger;
import org.research.iot.communication.hub.constants.DeviceCommands;
import org.research.iot.communication.hub.service.DeviceCommandService;
import org.research.iot.communication.hub.service.SerialCommunicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DeviceCommandServiceImpl implements DeviceCommandService{
	
	private static Logger logger = Logger.getLogger(DeviceCommandServiceImpl.class);

	@Autowired
	private SerialCommunicationService serialCommunicationService;
	
	@Override
	public void connectDevice(String comPort) throws Exception {
		logger.info("Sendind connect device command on "+comPort+" -> "+DeviceCommands.DEVICE_CONNECT);
		serialCommunicationService.startListnerForPayload(comPort);
		delay();
		serialCommunicationService.sendCommandtoDevice(DeviceCommands.DEVICE_CONNECT);
	}

	@Override
	public void disConnectDevice() throws Exception {
		logger.info("Sendind disconnect device command -> "+DeviceCommands.DEVICE_DISCONNECT);
		serialCommunicationService.sendCommandtoDevice(DeviceCommands.DEVICE_DISCONNECT);
		delay();
		serialCommunicationService.disconnect();
	}
	
	@Override
	public List<String> getAllComPorts() throws Exception{
		logger.info("Fetching device com ports");
		return serialCommunicationService.getAllCommPorts();
	}
	
	private void delay() throws InterruptedException {
		Thread.sleep(SerialCommunicationUnit.TIME_OUT);
	}

	@Override
	public void setPollingFrequency(int milliseconds) throws Exception {
		String command = String.format(DeviceCommands.DEVICE_POLL_FREQ, milliseconds); 
		serialCommunicationService.sendCommandtoDevice(command);
	}
	
}
