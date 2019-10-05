#!/bin/bash

git clone https://github.com/ilyakmet/rssparser

cd rssparser

npm i

make build

npm test

make publish

npm link
