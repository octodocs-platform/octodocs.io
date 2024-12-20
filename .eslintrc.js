module.exports = {
    ignorePatterns: ['**/@generated/**', '**/dist/**', '**/build/**'],
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:css-modules/recommended',
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['import', 'prettier', 'react-hooks', 'css-modules', 'react-refresh'],
    rules: {
        'react-refresh/only-export-components': 'warn',
        'no-restricted-syntax': 'off',
        'spaced-comment': [
            'error',
            'always',
            {
                markers: ['/'],
            },
        ],
        // ts-require directive
        'comma-dangle': ['error', 'always-multiline'],
        'arrow-parens': ['error', 'always'],
        indent: 'off',
        'max-len': [
            'error',
            120,
            2,
            {
                ignoreUrls: true,
                ignoreComments: false,
                ignoreRegExpLiterals: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'implicit-arrow-linebreak': 'off',
        'max-classes-per-file': 'off',
        'operator-linebreak': 'off',
        'object-curly-newline': 'off',
        'class-methods-use-this': 'off',
        'function-paren-newline': 'off',
        'no-param-reassign': 'off',
        'space-before-function-paren': 'off',
        'consistent-return': 'off',
        'prettier/prettier': 'error',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'import/prefer-default-export': 'off',
        // https://humanwhocodes.com/blog/2019/01/stop-using-default-exports-javascript-module/
        'import/order': [
            'error',
            {
                groups: [['builtin', 'external'], 'internal', 'parent', 'sibling', 'index'],
                'newlines-between': 'always',
            },
        ],
        'import/no-unresolved': 'off',
        'import/extensions': 'off',
        'import/no-extraneous-dependencies': ['off'],
        'arrow-body-style': 'off',
        'no-plusplus': 'off',
        camelcase: 'off',
        'no-underscore-dangle': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'react/display-name': 'off',
        '@typescript-eslint/no-non-null-assertion': 'error',
        'react-hooks/exhaustive-deps': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { argsIgnorePattern: '^_', destructuredArrayIgnorePattern: '^_', varsIgnorePattern: '^_' },
        ],
        'prefer-destructuring': 'error',
        'no-shadow': 'off',
        'no-confusing-arrow': 'off',
        'padding-line-between-statements': ['error', { blankLine: 'always', prev: '*', next: 'return' }],
    },
};
