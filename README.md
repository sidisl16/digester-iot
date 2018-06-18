# digester-iot
An IOT project to monitor a mini digester for household waste

Execution steps for Windows 7 and Above:

Download Source Code:
1. Install git client in your PC - https://git-scm.com/download/win
2. Create a folder and move inside 
3. Right click and open git bash
4. In the command line type the following command to clone/download the source code
   git clone https://github.com/sidisl16/digester-iot.git

Connect Sensor Box:
1. Connect the sensors to the box (marked on the upper side of the box) and connect serial cable to PC through USB.
2. Windows automatically searches the Arduino driver and installs it, if not then
    1. Open device manager in your system, navigate to Other devices  
    2. If it shows unknown device then right click on the unkown device and update driver
    3. Select Browse my computer and navigate to arduino-1.8.5-windows/arduino-1.8.5/drivers from downloaded source
    4. Click ok, you will see Arduino Driver intsalled successfully
    5. In device manager you will see Arduino com port under Ports(COM and LPT)

Setup and run Applications: 
1. Go to scripts folder from downloaded source
2. To start application double click on start-all.bat
3.. It will start Communication-hub, ElasticSearch and Grafana server, 
    we will be able to see logs of all three application of different terminals
4. It will also open a desktop application for device control
5. In the application click on refresh button to see all connected COM ports
6. Select the Arduino COM port - refer point no. 6.5
7. Click on Connect button, once connected the status will change from Red to Green
8. We will also able to see sensor data in the payload section of the application

View Dashboard:
1. To view dashboard, navigate to http://localhost:3000 in your browser
2. Default userId and password for Grafana is admin and admin respectively
3. Select Digestor Monitoring dashboard.

Stop Application:
1. Go to scripts folder and double click on stop-all.bat

Disclaimer: 
This project is made for educational purpose and cannot be used for commercial.
All open source used in this project are under Apache 2.0 lisence.
http://www.apache.org/licenses/LICENSE-2.0
