.PHONY: clean setup start test build deploy

all: setup test build

clean:
	rm -rf node_modules

setup:
	npm install

start:
	npm run start

test:
	CI=true npm run test

build:
	npm run build

deploy: build
	npm run deploy
