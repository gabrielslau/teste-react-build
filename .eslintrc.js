module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 12, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports

    project: './tsconfig.json',

    ecmaFeatures: {
      modules: true,
      destructuring: true,
      experimentalObjectRestSpread: true,
      classes: true,
      forOf: true,
      blockBindings: true,
      arrowFunctions: true,
      jsx: true,
    },
  },

  settings: {
    'import/resolver': {
      webpack: {},
      typescript: {},
      alias: {},
    },
  },

  env: {
    browser: true,
    es2021: true,
  },

  // Rules order is important, please avoid shuffling them
  extends: [
    'eslint:recommended',
    'standard',
    'standard-jsx',
    'standard-react',
    'plugin:react/recommended',
    'plugin:jsdoc/recommended',
    // 'plugin:jsx-a11y/recommended', // TODO: aplicar quando quiser melhorar acessibilidade
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],

  plugins: [
    '@typescript-eslint',
    'jsdoc',
  ],

  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:import/typescript',
      ],
      parser: '@typescript-eslint/parser',
      plugins: [
        '@typescript-eslint',
      ],

      rules: {
        // -------------
        // Typescript Rules
        // -------------
        '@typescript-eslint/unbound-method': 'off',
        '@typescript-eslint/require-await': 'off',

        // TODO: remover todas estas rules com warn e deixar padrão
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/ban-types': 'warn',
        '@typescript-eslint/no-empty-function': 'warn',
        '@typescript-eslint/no-empty-interface': 'warn',
        '@typescript-eslint/no-floating-promises': 'warn',
        '@typescript-eslint/no-inferrable-types': 'warn',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-unsafe-return': 'warn',
        '@typescript-eslint/no-var-requires': 'warn',
        '@typescript-eslint/restrict-plus-operands': 'warn',
        '@typescript-eslint/restrict-template-expressions': 'warn',
        'prefer-const': 'warn', // TODO: remover regra (deixar padrão)
        'no-var': 'warn', // TODO: remover regra (deixar padrão)
      },
    },
  ],

  globals: {
    __statics: true,
    ga: true, // Google Analytics
    chrome: true,
    logger: false,
    IS_PRODUCTION: false,
    STATIC_PATH: false,
  },

  // add your custom rules here
  rules: {
    // -------------
    // Docs Rules
    // -------------
    'jsdoc/check-indentation': 1,
    'jsdoc/check-syntax': 1,
    'jsdoc/require-description': 1,

    // -------------
    // General Rules
    // -------------
    'max-len': ['error', {
      code: 120,
      ignoreComments: true,
    }],
    'arrow-body-style': 'off',
    'prefer-arrow-callback': 'off',
    'arrow-parens': 'off',
    'no-param-reassign': 'off',
    'no-new': 'off',
    'consistent-return': 'off',
    'key-spacing': 'off',
    'no-multi-spaces': 'off',
    'no-underscore-dangle': 'off',
    'one-var': 'off',
    'global-require': 'off',
    'class-methods-use-this': 'off',
    'no-multiple-empty-lines': 'warn', // TODO: substituir warn por error
    camelcase: 'warn',

    'comma-dangle': [
      // TODO: substituir warn por error
      'warn',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'never',
      },
    ],

    'func-names': 'off',
    'function-paren-newline': 'off',
    'new-cap': 'off',
    'no-plusplus': 'off',
    'no-return-assign': 'off',
    'template-curly-spacing': 'off',
    'no-unused-expressions': 'off',
    'accessor-pairs': 'off',
    // TODO: substituir warn por error
    indent: ['warn', 2, { ignoredNodes: ['TemplateLiteral'], SwitchCase: 1 }],
    semi: [2, 'never'],
    quotes: ['warn', 'single'], // TODO: substituir warn por error
    'array-bracket-spacing': 'warn', // TODO: remover regra (deixar padrão)
    'array-callback-return': 'warn', // TODO: remover regra (deixar padrão)
    'dot-notation': 'warn', // TODO: remover regra (deixar padrão)
    'import/namespace': 'warn', // TODO: remover regra (deixar padrão)
    'multiline-ternary': 'warn', // TODO: remover regra (deixar padrão)
    'no-case-declarations': 'warn', // TODO: remover regra (deixar padrão)
    'no-var': 'warn', // TODO: remover regra (deixar padrão)
    'object-curly-newline': 'warn', // TODO: remover regra (deixar padrão)
    'prefer-const': 'warn', // TODO: remover regra (deixar padrão)
    'quote-props': 'warn', // TODO: remover regra (deixar padrão)
    'space-before-function-paren': 'warn', // TODO: remover regra (deixar padrão)
    'template-tag-spacing': 'warn', // TODO: remover regra (deixar padrão)

    // ------------
    // Fix Rules (regras desnecessárias)
    // ------------
    'no-use-before-define': 'off',

    // ------------
    // React
    // ------------
    'react/display-name': 'warn',
    'react/jsx-first-prop-new-line': 'warn', // TODO: remover regra (deixar padrão)
    'react/jsx-fragments': 'warn', // TODO: remover regra (deixar padrão)
    'react/jsx-tag-spacing': 'warn', // TODO: remover regra (deixar padrão)
    'react/jsx-curly-brace-presence': 'warn', // TODO: remover regra (deixar padrão)
    'react/jsx-curly-spacing': 'warn', // TODO: remover regra (deixar padrão)
    'react/jsx-curly-newline': 'warn', // TODO: remover regra (deixar padrão)
    'react/jsx-closing-bracket-location': 'warn', // TODO: remover regra (deixar padrão)
    'react/jsx-wrap-multilines': 'warn', // TODO: remover regra (deixar padrão)
    'react/jsx-closing-tag-location': 'warn', // TODO: remover regra (deixar padrão)
    'react/no-unused-prop-types': 'warn', // TODO: remover regra (deixar padrão)
    'react/jsx-props-no-multi-spaces': 'warn', // TODO: remover regra (deixar padrão)
    'react/jsx-handler-names': 'warn', // TODO: remover regra (deixar padrão)
    'react/jsx-no-target-blank': 'warn', // TODO: remover regra (deixar padrão)
    'react/jsx-no-bind': 'warn', // TODO: remover regra (deixar padrão)
    'react/jsx-key': 'warn', // TODO: remover regra (deixar padrão)
    'react/jsx-indent': 'warn', // TODO: remover regra (deixar padrão)
    'react/jsx-indent-props': 'warn', // TODO: remover regra (deixar padrão)
    'react/jsx-max-props-per-line': [1, { maximum: 1, when: 'always' }],
    'react/jsx-sort-props': [1, {
      callbacksLast: true,
      shorthandLast: true,
      ignoreCase: false,
      noSortAlphabetically: true,
      reservedFirst: true,
    }],

    // ------------
    // Import Rules
    // ------------

    'import/order': [
      // TODO: substituir warn por error
      'warn', {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index', 'object', 'type'],
      },
    ],
    'no-duplicate-imports': 'error',

    // allow console.log during development only
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow debugger during development only
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
}
