@echo off
setLocal EnableDelayedExpansion

start ..\elasticsearch-2.4.0\bin\elasticsearch.bat

cd ..\grafana-4.4.3\bin\
start start-server.bat

cd ..\..\Communication-hub\bin\
start start-communication-hub.bat

endLocal
exit