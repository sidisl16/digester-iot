package org.research.iot.communication.hub.model;

import org.springframework.data.elasticsearch.annotations.Document;

@Document(indexName = "sensors", type = "readings")
public class Reading {

	private float temperature1;
	private float temperature2;
	private float ph;
	private float gasFlowRate;
	private float moisture;
	private long recordedTime;
	private long deviceMillis;

	public Reading() {
	}

	public Reading(float temperature1, float temperature2, float ph, float gasFlowRate, float moisture,
			long recordedTime, long deviceMillis) {
		super();
		this.temperature1 = temperature1;
		this.temperature2 = temperature2;
		this.ph = ph;
		this.gasFlowRate = gasFlowRate;
		this.moisture = moisture;
		this.recordedTime = recordedTime;
		this.deviceMillis = deviceMillis;
	}

	public float getTemperature1() {
		return temperature1;
	}

	public void setTemperature1(float temperature1) {
		this.temperature1 = temperature1;
	}

	public float getTemperature2() {
		return temperature2;
	}

	public void setTemperature2(float temperature2) {
		this.temperature2 = temperature2;
	}

	public float getPh() {
		return ph;
	}

	public void setPh(float ph) {
		this.ph = ph;
	}

	public float getGasFlowRate() {
		return gasFlowRate;
	}

	public void setGasFlowRate(float gasFlowRate) {
		this.gasFlowRate = gasFlowRate;
	}

	public float getMoisture() {
		return moisture;
	}

	public void setMoisture(float moisture) {
		this.moisture = moisture;
	}

	public long getRecordedTime() {
		return recordedTime;
	}

	public void setRecordedTime(long recordedTime) {
		this.recordedTime = recordedTime;
	}

	public long getDeviceMillis() {
		return deviceMillis;
	}

	public void setDeviceMillis(long loadedTime) {
		this.deviceMillis = loadedTime;
	}

	@Override
	public String toString() {
		return "Reading [temperature1=" + temperature1 + ", temperature2=" + temperature2 + ", ph=" + ph
				+ ", gasFlowRate=" + gasFlowRate + ", moisture=" + moisture + ", recordedTime=" + recordedTime
				+ ", deviceMillis=" + deviceMillis + "]";
	}

}
