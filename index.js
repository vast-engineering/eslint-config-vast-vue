module.exports = {
    plugins: [
        'vue'
    ],
    extends: [
        'vast',
        'plugin:vue/recommended'
    ],
    rules: {
        // Possible errors:
        // this rule only covers case when used in code like: Vue.component...
        'vue/no-shared-component-data': 2,
        'vue/require-valid-default-prop': 2,

        // Best practices:
        'vue/html-end-tags': 2,
        'vue/no-async-in-computed-properties': 2,
        'vue/no-duplicate-attributes': 2,
        'vue/no-side-effects-in-computed-properties': 2,
        // this could be part of the Stylistic Issues
        'vue/order-in-components': 1,

        // Stylistic Issues:
        // 'vue/html-indent': 1 // Rule not found?
        'vue/html-quotes': 1,
        // 'vue/html-self-closing': 1, // Contrasts to html-end-tags
        'vue/max-attributes-per-line': 1,
        'vue/mustache-interpolation-spacing': 1,
        'vue/name-property-casing': 1,
        'vue/no-multi-spaces': 1,
        'vue/v-bind-style': 1,
        'vue/v-on-style': 1

    }
};
