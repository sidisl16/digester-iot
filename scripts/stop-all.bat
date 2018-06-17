@echo off
setLocal EnableDelayedExpansion

for /f "tokens=2" %%a in ('tasklist^|find /i "grafana"') do (taskkill /IM %%a)

for /f "tokens=2" %%a in ('tasklist /v^|find /i "elasticsearch"') do (taskkill /IM %%a)

for /f "tokens=2" %%a in ('tasklist/v^|find /i "communication-hub"') do (taskkill /IM %%a)

endLocal
exit