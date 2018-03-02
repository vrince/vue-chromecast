#!/bin/bash
npm run build
cd dist
git add * 
git commit -am "release"
git push origin master