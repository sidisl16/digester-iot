package org.research.iot.communication.hub.service;

import org.research.iot.communication.hub.model.Reading;

public interface ElasticSearchService {
	public void saveReadings(Reading reading) throws Exception;
}
