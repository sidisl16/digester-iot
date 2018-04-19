package org.research.iot.communication.hub.service;

import akka.actor.ActorRef;

public interface AkkaService {
	
	void startAkkaService();
	
	ActorRef getMessageProcessorActor();
}
