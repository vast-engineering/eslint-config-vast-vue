module.exports = {
    plugins: [
        'vue'
    ],
    extends: [
        'vast',
        'plugin:vue/recommended'
    ],
    rules: {
        // Stylistic Issues:
        'vue/html-indent': ['warn', 4, {
            attribute: 1,
            closeBracket: 0,
            ignores: []
        }],
        'vue/max-attributes-per-line': ['warn', {
            singleline: 3,
            multiline: {
                max: 1,
                allowFirstLine: false
            }
        }],
        'vue/html-self-closing': ['warn', {
            html: {
                void: 'never',
                normal: 'never',
                component: 'always'
            },
            svg: 'always',
            math: 'always'
        }],
        'vue/html-closing-bracket-newline': ['error', {
            multiline: 'never'
        }],
        'vue/no-v-html': 'off',
        'vue/attributes-order': 'warn'
    }
};
