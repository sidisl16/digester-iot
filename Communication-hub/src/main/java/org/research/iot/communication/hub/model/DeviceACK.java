package org.research.iot.communication.hub.model;

import java.util.Map;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DeviceACK {

	@JsonProperty("ACK")
	private Map<String, String> ACK;

	public Map<String, String> getACK() {
		return ACK;
	}

	public void setACK(Map<String, String> aCK) {
		this.ACK = aCK;
	}

	@Override
	public String toString() {
		return "DeviceACK [ACK=" + ACK + "]";
	}

}
