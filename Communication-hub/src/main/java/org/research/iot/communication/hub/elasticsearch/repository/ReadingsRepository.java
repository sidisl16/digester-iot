package org.research.iot.communication.hub.elasticsearch.repository;

import org.research.iot.communication.hub.model.Reading;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReadingsRepository extends ElasticsearchRepository<Reading, String>{
}
