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
        'vue/order-in-components': 1

        // Stylistic Issues:
    }
};
