package org.research.iot.communication.hub.model;

public class Reading {

	private float temperature1;
	private float temperature2;
	private float ph;
	private float gasFlowRate;
	private float moisture;

	public Reading() {
	}

	public Reading(float temperature1, float temperature2, float ph, float gasFlowRate, float moisture) {
		super();
		this.temperature1 = temperature1;
		this.temperature2 = temperature2;
		this.ph = ph;
		this.gasFlowRate = gasFlowRate;
		this.moisture = moisture;
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

	@Override
	public String toString() {
		return "Reading [temperature1=" + temperature1 + ", temperature2=" + temperature2 + ", ph=" + ph
				+ ", gasFlowRate=" + gasFlowRate + ", moisture=" + moisture + "]";
	}
	
}
