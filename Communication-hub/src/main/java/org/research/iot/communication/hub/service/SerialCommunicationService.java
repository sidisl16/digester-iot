package org.research.iot.communication.hub.service;

import java.util.List;

public interface SerialCommunicationService {

	List<String> getAllCommPorts();

	void startListnerForPayload(String comPort) throws Exception;
	
	void sendCommandtoDevice(String command) throws Exception;

	void disconnect();
}
