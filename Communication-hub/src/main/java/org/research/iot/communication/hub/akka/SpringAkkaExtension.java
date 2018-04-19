package org.research.iot.communication.hub.akka;

import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Component;

import akka.actor.Extension;
import akka.actor.Props;

@Component
public class SpringAkkaExtension implements Extension {
	
	private ApplicationContext applicationContext;
	
	public void initialize(ApplicationContext applicationContext) {
		this.applicationContext = applicationContext;
	}
	
	public Props props(String actorBeanName) {
		return Props.create(AkkaActorProducer.class, applicationContext, actorBeanName);
	}
}
