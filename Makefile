install:
	npm install

lint:
	npx htmlhint ./src/*.html
	npx stylelint ./src/styles/*.css
	
runbabel:
	npx babel --watch src --out-dir . --presets react-app/prod
	
runpage:
	npx browser-sync start -s '.' --files './*.html'