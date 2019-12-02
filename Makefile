.PHONY: clean setup start test build deploy

DOCKER_RUN := docker run --rm -v `pwd`:/workspace:delegated -w /workspace
DOCKER_IMAGE := node:13
NPM := -it --entrypoint="/usr/local/bin/npm" -v ~/.npm:/root/.npm:delegated

all: setup test build

clean:
	rm -rf node_modules

setup:
	$(DOCKER_RUN) $(NPM) $(DOCKER_IMAGE) install

start:
	$(DOCKER_RUN) $(NPM) -p 3000:3000 $(DOCKER_IMAGE) run start

test:
	$(DOCKER_RUN) $(NPM) --env="CI=true" $(DOCKER_IMAGE) run test

build:
	$(DOCKER_RUN) $(NPM) $(DOCKER_IMAGE) run build

deploy: build
	npm run deploy
