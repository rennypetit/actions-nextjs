// eslint.config.js
module.exports = [
	{
		files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
		languageOptions: {
			parserOptions: {
				ecmaVersion: 'latest',
				sourceType: 'module',
			},
		},
		plugins: ['react'],
		rules: {
			'no-console': 'warn', // Esta regla debería generar un warning para console.log
			'no-unused-vars': 'error',
		},
	},
	{
		files: ['*.ts', '*.tsx'],
		extends: ['next/core-web-vitals', 'next/typescript'],
		languageOptions: {
			parser: '@typescript-eslint/parser',
		},
		plugins: ['@typescript-eslint'],
		rules: {
			'@typescript-eslint/no-explicit-any': 'warn',
		},
	},
];
