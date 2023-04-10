install:
	npm ci install

brain-game:
	node bin/brain-games.js

brain-even:
	node bin/brain-even.js	

brain-calc:
	node bin/brain-calc.js

brain-gcd.js:
	node bin/brain-gcd.js
	
publish:
	npm publish --dry-run

lint:
	npx eslint .
	
publish:
	npm publish --dry-run

