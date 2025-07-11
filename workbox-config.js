module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{webp,mp4,js,css,svg,png,ico,html,json}'
	],
	swDest: 'dist/service-worker.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};