.PHONY: example
example:
	rm -f *.tgz
	yarn pack
	cd example && \
		rm -rf node_modules/chartjs-colorful/ && \
		tar xfz ../*.tgz && \
		mv package/ node_modules/chartjs-colorful && \
		rm -rf out && \
		yarn build
