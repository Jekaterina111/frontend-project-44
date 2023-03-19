install: install-deps
	npx simple-git-hooks

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

brain-game:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js	

lint:
	npx eslint .
	
publish:
	npm publish --dry-run

