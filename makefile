.PHONY: build help

help:
	@grep -E '^[a-zA-Z0-9_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Install all dependencies
	yarn

start-playground: ## Start the playground
	@cd ./packages/playground && yarn dev

start-fake-api: ## Start the fake API
	@cd ./packages/demo-fake-api && yarn start

build-playground: ## Build the playground
	@cd ./packages/playground && yarn build

test-playground: ## Test the playground
	@cd ./packages/playground && yarn test

start: ## Start all
	@(trap 'kill 0' INT; ${MAKE} start-fake-api & ${MAKE} start-playground)

build: build-playground ## Build all

test: test-playground ## Test all
