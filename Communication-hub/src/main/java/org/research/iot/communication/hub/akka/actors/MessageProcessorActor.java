package org.research.iot.communication.hub.akka.actors;

import java.io.IOException;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.research.iot.communication.hub.model.DeviceACK;
import org.research.iot.communication.hub.model.Reading;
import org.research.iot.communication.hub.service.ElasticSearchService;
import org.research.iot.communication.hub.service.MessageProcessorService;
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
public class MessageProcessorActor extends UntypedActor implements MessageProcessorService {

	private static Logger logger = LoggerFactory.getLogger(MessageProcessorActor.class);
	private ObjectMapper objectMapper;

	@Autowired
	private SwingAppService swingAppService;

	@Autowired
	private ElasticSearchService elasticSearchService;

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
			if (messageRaw.contains("ACK")) {
				Object message = objectMapper.readValue(messageRaw, DeviceACK.class);
				if (message instanceof DeviceACK) {
					Map<String, String> ack = ((DeviceACK) message).getACK();
					swingAppService.setCommandStatus(ack.entrySet().iterator().next().getKey(),
							ack.entrySet().iterator().next().getValue());
				}
			} else {
				Object message = objectMapper.readValue(messageRaw, Reading.class);
				if (message instanceof Reading) {
					Reading reading = (Reading) message;
					saveToElasticSearch(reading);
					sendReadingstoSwingApp(reading);
				}
			}
		} catch (IOException e) {
			logger.warn("Unable to parse message!");
		}
	}

	private void sendReadingstoSwingApp(Reading reading) {
		swingAppService.setPayload(reading);
	}

	private void saveToElasticSearch(Reading reading) {
		try {
			elasticSearchService.saveReadings(reading);
			logger.info("Reading stored in elastic search!");
		} catch (Exception e) {
			logger.error("Unable to persist reading on elastic search, reason -> {}", e.getMessage());
		}
	}

}
