package org.research.iot.communication.hub.akka;

import org.springframework.context.ApplicationContext;

import akka.actor.Actor;
import akka.actor.IndirectActorProducer;

public class AkkaActorProducer implements IndirectActorProducer{
	
	final private ApplicationContext applicationContext;
	final private String actorBeanName;
	
	public AkkaActorProducer(ApplicationContext applicationContext, String actorBeanName) {
		super();
		this.applicationContext = applicationContext;
		this.actorBeanName = actorBeanName;
	}

	@Override
	public Class<? extends Actor> actorClass() {
		return (Class<? extends Actor>) applicationContext.getType(actorBeanName);
	}

	@Override
	public Actor produce() {
		return (Actor) applicationContext.getBean(actorBeanName);
	}

}
