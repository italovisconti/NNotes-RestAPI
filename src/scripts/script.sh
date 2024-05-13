#!/bin/bash

# Entramos en el folder app
cd /opt/app/NNotes-RestAPI

# Instala las dependencias del proyecto with sudo
sudo npm install

# Ejecuta el comando npm run build
sudo npm run build

# Ejecuta el comando npm start con el puerto 3000
npm start
