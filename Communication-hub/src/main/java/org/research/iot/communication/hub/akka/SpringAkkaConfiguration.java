package org.research.iot.communication.hub.akka;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.typesafe.config.Config;
import com.typesafe.config.ConfigFactory;

import akka.actor.ActorSystem;

@Configuration
public class SpringAkkaConfiguration {

	@Autowired
	private ApplicationContext applicationContext;

	@Autowired
	private SpringAkkaExtension extension;

	@Bean
	public ActorSystem actorSystem() {
		ActorSystem system = ActorSystem.create("commhub-actor-system");
		extension.initialize(applicationContext);
		return system;
	}
	
	@Bean
	public Config akkaConfiguration() {
		return ConfigFactory.load();
	}
}
