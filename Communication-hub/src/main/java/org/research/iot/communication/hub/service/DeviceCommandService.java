package org.research.iot.communication.hub.service;

import java.util.List;

public interface DeviceCommandService {
	
	void connectDevice(String comPort) throws Exception;
	
	void disConnectDevice() throws Exception;
	
	List<String> getAllComPorts() throws Exception;
	
	void setPollingFrequency(int milliseconds) throws Exception;

}
