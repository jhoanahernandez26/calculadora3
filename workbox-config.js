module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{js,html}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};