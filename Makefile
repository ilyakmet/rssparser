install:
	npm install

start:
	npx babel-node src/bin/rssparser.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

build:
	npm run-script build
