#!/bin/bash 
ssh root@65.2.185.165  
sudo chown -R $(whoami):$(whoami) /opt
cd /opt/git
git clone https://github.com/LanDevops/DockerTesting
cd DockerTesting
docker build -t node-web-app .
docker run -p 49160:3000 -d node-web-app
