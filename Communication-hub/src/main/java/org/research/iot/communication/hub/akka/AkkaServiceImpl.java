package org.research.iot.communication.hub.akka;

import org.research.iot.communication.hub.service.AkkaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import akka.actor.ActorRef;
import akka.actor.ActorSystem;

@Service
public class AkkaServiceImpl implements AkkaService {
	
	@Autowired
	private ActorSystem actorSystem;
	
	@Autowired
	private SpringAkkaExtension extension;
	
	private ActorRef messageProcessorActorRef;

	@Override
	public ActorRef getMessageProcessorActor() {
		return messageProcessorActorRef;
	}

	@Override
	public void startAkkaService() {
		messageProcessorActorRef = actorSystem.actorOf(extension.props("messageProcessorActor"), "message-processor-actor");
	}
	
}
