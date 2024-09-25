module.exports = {
	"env": {
		"browser": true,
		"commonjs": true,
		"es2021": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:vue/essential"
	],
	"parserOptions": {
		"ecmaVersion": 12
	},
	"plugins": [
		"vue"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		],
		"max-len": ["error", { "code": 5000 }],
		"vue/valid-v-model": "off",
	}
};
