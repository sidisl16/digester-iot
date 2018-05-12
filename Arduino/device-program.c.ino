#include <stdio.h>
#include <OneWire.h> 
#include <DallasTemperature.h>

#define DEV_CON_CMD "CONNECT"
#define DEV_DISCON_CMD "DISCONNECT"
#define POLLING_FREQUENCY "POLL_FREQ;"
#define SHAFT_SWITCH "SHAFT_SWITCH;"
#define SHAFT_SPEED "SHAFT_SPEED;"

//Pin decleration
const int PHANALOGIN = A0; 
const int MOISTUREANALOGIN = A1; 
const int TEMP1DIGIN = 2; 
const int TEMP2DIGIN = 3; 


int sensorValue = 0; 
int moistureCalliberatedvalue = 680;
unsigned long int avgValue; 
float b;
int buf[10],temp;
int connected = 0;
int polling = 2000;

OneWire oneWire(TEMP1DIGIN);
DallasTemperature sensors(&oneWire);

void setup() {
 Serial.begin(115200);
}


void processCommand(String command) {
  if(command.equals(DEV_CON_CMD)){
    Serial.println("{\"ACK\":{\""+command+"\":\"SUCCESS\"}}");
    connected = 1;
  }else if(command.equals(DEV_DISCON_CMD)){
    Serial.println("{\"ACK\":{\""+command+"\":\"SUCCESS\"}}");
    connected = 0;
  }else if(command.substring(0,10).equals(POLLING_FREQUENCY)) {
    polling = command.substring(10,command.length()).toInt();
    Serial.println("{\"ACK\":{\""+command+"\":\"SUCCESS\"}}");
  }
}


int getMoistureReading() {
  int sensorValue = analogRead(MOISTUREANALOGIN);
  return (moistureCalliberatedvalue - sensorValue);
}

float getPhReading() {
 for(int i=0;i<10;i++) 
 { 
  buf[i]=analogRead(PHANALOGIN);
  delay(10);
 }
 for(int i=0;i<9;i++)
 {
  for(int j=i+1;j<10;j++)
  {
   if(buf[i]>buf[j])
   {
    temp=buf[i];
    buf[i]=buf[j];
    buf[j]=temp;
   }
  }
 }
 avgValue=0;
 for(int i=2;i<8;i++)
 avgValue+=buf[i];
 float pHVol=(float)avgValue*5.0/1024/6;
 float phValue = -5.70 * pHVol + 21.34;
 return phValue;
}

float getTemp1Reading() 
{ 
 sensors.requestTemperatures(); // Send the command to get temperature readings 
 float tempInC = sensors.getTempCByIndex(0); 
 return (tempInC * 1.8 + 32);
} 


String formJSONMessage(float temp1, float temp2, float ph, float flowRate, float moisture, long timeMillis) {

  String message = "";
  
  String startMessage = "{";
  String deviceMillis = "\"deviceMillis\":";
  String temp1Message = ",\"temperature1\":";
  String temp2Message = ",\"temperature2\":";
  String phMessage = ",\"ph\":";
  String flowRateMessage = ",\"gasFlowRate\":";
  String moistureMessage = ",\"moisture\":";
  String endMessage = "}";

  message.concat(startMessage);
  message.concat(deviceMillis);
  message.concat(timeMillis);
  message.concat(temp1Message);
  message.concat(temp1);
  message.concat(temp2Message);
  message.concat(temp2);
  message.concat(phMessage);
  message.concat(ph);
  message.concat(flowRateMessage);
  message.concat(flowRate);
  message.concat(moistureMessage);
  message.concat(moisture);
  message.concat(endMessage);
  return message;
}

void sendReadings(){
  
  if(connected == 1) {
    float temp1 = getTemp1Reading();//95.0;
    float temp2 = 95.0;
    float ph =  getPhReading();//7.0;
    float flowRate = 10;
    float moisture = getMoistureReading();//600;
    long timeMillis = millis();
    String message = formJSONMessage(temp1,temp2,ph,flowRate,moisture,timeMillis);

    Serial.println(message);
  }
}

void loop() {
  String command = Serial.readString();
  processCommand(command);
  sendReadings();
  delay(polling);
}