#!/bin/bash


git add * ;
git commit -m "Pub:0 🍺 ... $1" ;
git push ;
echo "" ;
echo "Crack open a cold one while cloudflare deploys the page and if your on master view it at https://mangoleaf.world" ;
