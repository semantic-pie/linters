# `@semantic-pie/eslint-config`

## Install

```
npm install --save-dev eslint @semantic-pie/eslint-config
```

## Usage

Add `.eslintrc.cjs` file in the project root with the following content:

```
module.exports = {
    extends: [
        '@semantic-pie/eslint-config',
    ],
    root: true,
}
```

### Client & Server

Add client and server config files in corresponding directories:

```
module.exports = {
    extends: [
        '@semantic-pie/eslint-config/client',
    ],
}
```

```
module.exports = {
    extends: [
        '@semantic-pie/eslint-config/server',
    ],
}
```

### Prettier

If you are using Prettier, extend root config with the additional rules:

```
module.exports = {
    extends: [
        '@semantic-pie/eslint-config',
        '@semantic-pie/eslint-config/prettier'
    ],
    root: true,
}
```

### Import order

If you want to enforce a convention in module import order, extend root config with the additional rules:

```
module.exports = {
    extends: [
        '@semantic-pie/eslint-config',
        '@semantic-pie/eslint-config/import'
    ],
    root: true,
}
```

### A11y

If you want to spot accessibility issues, extend root config with the additional rules:

```
module.exports = {
    extends: [
        '@semantic-pie/eslint-config',
        '@semantic-pie/eslint-config/a11y'
    ],
    root: true,
}
```
