#include <stdio.h>
#define DEV_CON_CMD "CONNECT"
#define DEV_DISCON_CMD "DISCONNECT"
#define POLLING_FREQUENCY "POLL_FREQ;"
#define SHAFT_SWITCH "SHAFT_SWITCH;"
#define SHAFT_SPEED "SHAFT_SPEED;"


int connected = 0;
int polling = 2000;

void setup() {
 Serial.begin(115200);

}


void processCommand(String command) {
  if(command.equals(DEV_CON_CMD)){
    Serial.println("\"ACK\":{\"command\":\"SUCCESS\"}");
    connected = 1;
  }else if(command.equals(DEV_DISCON_CMD)){
    Serial.println("\"ACK\":{\"command\":\"SUCCESS\"}");
    connected = 0;
  }else if(command.substring(0,10).equals(POLLING_FREQUENCY)) {
    polling = command.substring(10,command.length()).toInt();
    Serial.println("\"ACK\":{\"command\":\"SUCCESS\"}");
  }
}

void sendReadings(){
  
  if(connected == 1) {
    String message = "{\"temperature1\":95,\"temperature2\":95,\"ph\":7.5,\"gasFlowRate\":10,\"moisture\":558}";
    Serial.println(message);
  }
}

void loop() {
  String command = Serial.readString();
  processCommand(command);
  sendReadings();
  delay(polling);
}
