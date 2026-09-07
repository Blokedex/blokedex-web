@echo off
pushd "%~dp0"

start "Blokedex server" cmd /k "node server.js"
ping 127.0.0.1 -n 3 >nul
start "" "http://localhost:3000"

popd
exit /b 0
