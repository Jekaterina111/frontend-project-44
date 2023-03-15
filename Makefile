install: install-deps
	npx simple-git-hooks

run:
	bin/nodejs-package.js 10

install-deps:
	npm ci

brain-game:
	node bin/brain-games.js

publish:
	npm publish --dry-run

