const {ERROR, OFF} = require('./constants');
module.exports = {
    extends: ['plugin:jsx-a11y/recommended'],
    plugins: ['jsx-a11y'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
    },
    rules: {
        'jsx-a11y/no-aria-hidden-on-focusable': ERROR,
        'jsx-a11y/anchor-is-valid': OFF,
    },
};
