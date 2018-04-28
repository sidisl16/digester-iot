package org.research.iot.communication.hub.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.elasticsearch.annotations.DateFormat;
import org.springframework.data.elasticsearch.annotations.Document;
import org.springframework.data.elasticsearch.annotations.Field;
import org.springframework.data.elasticsearch.annotations.FieldIndex;
import org.springframework.data.elasticsearch.annotations.FieldType;

@Document(indexName = "sensors", type = "readings")
public class Reading {

	@Id
	private String id;
	private float temperature1;
	private float temperature2;
	private float ph;
	private float gasFlowRate;
	private float moisture;
	
	@Field(type = FieldType.Date)
	private Date recordedTime;
	private long deviceMillis;

	public Reading() {
	}

	
	
	public Reading(String id, float temperature1, float temperature2, float ph, float gasFlowRate, float moisture,
			Date recordedTime, long deviceMillis) {
		super();
		this.id = id;
		this.temperature1 = temperature1;
		this.temperature2 = temperature2;
		this.ph = ph;
		this.gasFlowRate = gasFlowRate;
		this.moisture = moisture;
		this.recordedTime = recordedTime;
		this.deviceMillis = deviceMillis;
	}



	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
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

	public Date getRecordedTime() {
		return recordedTime;
	}

	public void setRecordedTime(Date recordedTime) {
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
		return "Reading [id=" + id + ", temperature1=" + temperature1 + ", temperature2=" + temperature2 + ", ph=" + ph
				+ ", gasFlowRate=" + gasFlowRate + ", moisture=" + moisture + ", recordedTime=" + recordedTime
				+ ", deviceMillis=" + deviceMillis + "]";
	}
}
