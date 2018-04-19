package org.research.iot.communication.hub.service;

import org.research.iot.communication.hub.model.Reading;

public interface SwingAppService {

	void startSwingApp();

	void setComPorts();

	void changeState();

	void setPayload(Reading reading);
}
