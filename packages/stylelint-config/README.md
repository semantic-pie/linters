# `@semantic-pie/stylelint-config`

## Install

```
npm i --save-dev stylelint postcss @semantic-pie/stylelint-config
```

## Usage

Add `.stylelintrc` file in the project root with the following content:

```
{
    "extends": "@semantic-pie/stylelint-config"
}
```

### Order

If you wish to organize properties within your CSS files, expand the root configuration with the specified rules.

```
{
    "extends": [
        "@semantic-pie/stylelint-config",
        "@semantic-pie/stylelint-config/order"
    ]
}
```

### Prettier

If you're utilizing Prettier, augment the root configuration with supplementary rules.

```
{
    "extends": [
        "@semantic-pie/stylelint-config",
        "@semantic-pie/stylelint-config/prettier"
    ]
}
```
