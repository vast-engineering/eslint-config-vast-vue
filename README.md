# eslint-config-vast-vue
> ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for Vue to be used with [eslint-config-vast](https://github.com/vast-engineering/eslint-config-vast)

<!-- [![NPM version](https://badge.fury.io/js/eslint-config-vast-react.svg)](https://www.npmjs.org/package/eslint-config-vast-react) [![Dependency Status](https://david-dm.org/vast-engineering/eslint-config-vast-react.svg)](https://david-dm.org/vast-engineering/eslint-config-vast-react) [![devDependency Status](https://david-dm.org/vast-engineering/eslint-config-vast-react/dev-status.svg)](https://david-dm.org/vast-engineering/eslint-config-vast-react?type=dev) [![devDependency Status](https://david-dm.org/vast-engineering/eslint-config-vast-react/peer-status.svg)](https://david-dm.org/vast-engineering/eslint-config-vast-react?type=peer) -->

This config uses [eslint-plugin-vue](https://github.com/vuejs/eslint-plugin-vue) for linting Vue templates.

## Installation

    npm i --save-dev eslint-config-vast-vue eslint-config-vast eslint-plugin-vue

## Usage

Create `.eslintrc` file in the root of your project with the following config:

```javascript
{
  "extends": ["eslint-config-vast", "eslint-config-vast-vue"]
}
```

See [eslint-config-vast](https://github.com/vast-engineering/eslint-config-vast) for additional information.

## Related
- [eslint-config-vast](https://github.com/vast-engineering/eslint-config-vast)

## License

[MIT](LICENSE) © 2016 Vast.com, Inc.
