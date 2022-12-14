module.exports = {
	env: {
		browser: true,
		node: true,
		es2021: true,
		// 允许setup语法糖
		"vue/setup-compiler-macros": true
	},
	parser: "vue-eslint-parser",
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:vue/vue3-recommended",
		"plugin:prettier/recommended",
		"prettier"
	],
	parserOptions: {
		ecmaVersion: 12,
		parser: "@typescript-eslint/parser",
		sourceType: "module",
		ecmaFeatures: {
			jsx: true
		}
	},
	plugins: ["vue", "@typescript-eslint", "prettier"],
	rules: {
		"@typescript-eslint/no-explicit-any": "off",
		"vue/multi-word-component-names": 0,
		"vue/no-v-html": 0,
		"prettier/prettier": "error",
		// 禁止出现console
		"no-console": "off",
		// 禁用debugger
		"no-debugger": "off",
		// 要求使用剩余参数而不是 arguments
		"prefer-rest-params": "off",
		// 禁止直接调用 Object.prototypes 的内置属性
		"no-prototype-builtins": "off",
		// Forbidden non-null assertion
		"@typescript-eslint/no-non-null-assertion": "off",
		// 允许使用空函数
		"@typescript-eslint/no-empty-function": "off"
	}
};
