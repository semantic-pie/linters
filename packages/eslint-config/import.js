const {ERROR} = require('./constants');

module.exports = {
    rules: {
        'import/order': [
            ERROR,
            {
                alphabetize: {
                    order: 'asc',
                },
                'newlines-between': 'always',
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
                pathGroups: [
                    {
                        pattern: 'react',
                        group: 'external',
                        position: 'before',
                    },
                    {
                        pattern: '*.{svg,png,jpg,jpeg,webp,json}',
                        patternOptions: {
                            dot: true,
                            nocomment: true,
                            matchBase: true,
                        },
                        group: 'type',
                        position: 'after',
                    },
                    {
                        pattern: '*.{css,sass,scss,less,styl}',
                        patternOptions: {
                            dot: true,
                            nocomment: true,
                            matchBase: true,
                        },
                        group: 'type',
                        position: 'after',
                    },
                ],
                pathGroupsExcludedImportTypes: [
                    '*.{svg,png,jpg,jpeg,webp,json}',
                    '*.{css,sass,scss,less,styl}',
                    'react',
                ],
                warnOnUnassignedImports: true,
            },
        ],
    },
};
