#include <stdio.h>

#define DEV_CON_CMD "CONNECT"
#define DEV_DISCON_CMD "DISCONNECT"
#define POLLING_FREQUENCY "POLL_FREQ;"
#define SHAFT_SWITCH "SHAFT_SWITCH;"
#define SHAFT_SPEED "SHAFT_SPEED;"


int connected = 0;
int polling = 2000;
long timestamp = 0;
char buf[100];

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


String formJSONMessage(float temp1, float temp2, float ph, float flowRate, float moisture, long timeMillis) {

  String message = "";
  
  String startMessage = "{";
  String deviceMillis = "\"deviceMillis\":";
  String temp1Message = ",\"temperature1\":";
  String temp2Message = ",\"temperature1\":";
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
    float temp1 = 95.0;
    float temp2 = 95.0;
    float ph = 7.0;
    float flowRate = 10;
    float moisture = 600;
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