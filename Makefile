.PHONY: example
example:
	rm -f *.tgz
	yarn pack
	cd example && \
		rm -rf node_modules/chartjs-color-schemes/ && \
		tar xfz ../*.tgz && \
		mv package/ node_modules/chartjs-color-schemes && \
		rm -rf out && \
		yarn build
