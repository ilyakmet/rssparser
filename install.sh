#!/bin/bash

npm i

make build

npm test

make publish

npm link
