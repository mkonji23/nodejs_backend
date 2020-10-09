module.exports = {
	env: {
		browser: true,
		es2020: true,
		node: true,
	},
	extends: ['eslint:recommended', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'module',
		parser: 'babel-eslint',
	},
	plugins: ['prettier'],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-unused-vars': 'off',
		'vue/no-unused-components': 'off', // 미사용 변수 체크 해제,
		'prettier/prettier': [
			'error',
			// 아래 규칙들은 개인 선호에 따라 prettier 문법 적용
			// https://prettier.io/docs/en/options.html
			{
				singleQuote: true,
				semi: true,
				useTabs: true,
				tabWidth: 2,
				trailingComma: 'all',
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
				endOfLine: 'auto',
			},
		],
		// "node/exports-style": ["error", "module.exports"],
		// "node/file-extension-in-import": ["error", "always"],
		// "node/prefer-global/buffer": ["error", "always"],
		// "node/prefer-global/console": ["error", "always"],
		// "node/prefer-global/process": ["error", "always"],
		// "node/prefer-global/url-search-params": ["error", "always"],
		// "node/prefer-global/url": ["error", "always"],
		// "node/prefer-promises/dns": "error",
		// "node/prefer-promises/fs": "error",
	},
};
