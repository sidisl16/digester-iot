package org.research.iot.communication.hub;

import java.util.logging.Logger;

import org.research.iot.communication.hub.service.AkkaService;
import org.research.iot.communication.hub.service.SwingAppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class CommunicationHubApplication {

	private static final Logger LOGGER = Logger.getLogger(CommunicationHubApplication.class.getName());

	@Autowired
	private SwingAppService swingAppService;

	@Autowired
	private AkkaService akkaService;

	public static void main(String[] args) {
		SpringApplicationBuilder builder = new SpringApplicationBuilder(CommunicationHubApplication.class);
		ConfigurableApplicationContext context = builder.headless(false).run(args);

		CommunicationHubApplication app = context.getBean(CommunicationHubApplication.class);
		app.init();
	}

	public void init() {

		LOGGER.info("Starting Akka Service.....");
		akkaService.startAkkaService();

		LOGGER.info("Starting Swing App.....");
		swingAppService.startSwingApp();

	}
}
