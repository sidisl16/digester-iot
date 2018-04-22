package org.research.iot.communication.hub.akka.actors;

import java.io.IOException;

import javax.annotation.PostConstruct;

import org.research.iot.communication.hub.model.Reading;
import org.research.iot.communication.hub.service.SwingAppService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Component;

import com.fasterxml.jackson.databind.ObjectMapper;

import akka.actor.UntypedActor;

@Component
@Scope("prototype")
public class MessageProcessorActor extends UntypedActor {

	private static Logger logger = LoggerFactory.getLogger(MessageProcessorActor.class);
	private ObjectMapper objectMapper;

	@Autowired
	private SwingAppService swingAppService;

	@PostConstruct
	public void init() {
		objectMapper = new ObjectMapper();
	}

	@Override
	public void onReceive(Object message) throws Throwable {
		logger.info("Message Recieved -> " + message.toString());
			processMessage((String) message);
	}

	private void processMessage(String messageRaw) {
		try {
			Object message = objectMapper.readValue(messageRaw, Reading.class);
			if (message instanceof Reading) {
				Reading reading = (Reading) message;
				sendReadingstoSwingApp(reading);
				logger.info("Message Recieved -> " + reading);
			}
		} catch (IOException e) {
			logger.error("Unable to parse message!");
		}
	}

	private void sendReadingstoSwingApp(Reading reading) {
		swingAppService.setPayload(reading);
	}

}
