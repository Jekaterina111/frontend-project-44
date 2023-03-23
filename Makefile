install:
	npm ci install

brain-game:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js	
	
publish:
	npm publish --dry-run

lint:
	npx eslint .
	
publish:
	npm publish --dry-run

