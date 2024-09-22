#!/bin/bash

npm install ;
npm run build ;

firefox http://localhost:3000/map/cam.html &&  npm run live;

