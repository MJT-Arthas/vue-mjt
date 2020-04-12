module.exports = {
	css: {
    sourceMap: true,

		loaderOptions: {
			scss: {
				prependData: `@import "~@/styles/main.scss";`
			},
		}
  }
}