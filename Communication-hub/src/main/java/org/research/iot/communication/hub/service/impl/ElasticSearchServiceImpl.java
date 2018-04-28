package org.research.iot.communication.hub.service.impl;

import java.util.Date;
import java.util.UUID;

import org.research.iot.communication.hub.elasticsearch.repository.ReadingsRepository;
import org.research.iot.communication.hub.model.Reading;
import org.research.iot.communication.hub.service.ElasticSearchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ElasticSearchServiceImpl implements ElasticSearchService{
	
	@Autowired
	private ReadingsRepository readingRepository;

	@Override
	public void saveReadings(Reading reading) throws Exception {
		try {
			reading.setRecordedTime(new Date());
			setUniqueId(reading);
			readingRepository.save(reading);
		}catch(Exception ex) {
			
		}
	}
	
	private void setUniqueId(Reading reading) {
		reading.setId(UUID.randomUUID().toString()+"-"+reading.getRecordedTime().getTime());
	}

}
