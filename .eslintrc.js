module.exports = {
	parser: 'babel-eslint',
	env: {
		jest: true,
	},
	plugins: ['babel'],
	extends: ['airbnb', 'prettier'],
	rules: {
		'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
	},
};
