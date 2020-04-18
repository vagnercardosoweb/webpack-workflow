module.exports = {
  env: {
    // node: true,
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: ['airbnb', 'plugin:prettier/recommended'],
  plugins: ['react', 'react-hooks', 'prettier', 'jsx-a11y', 'import'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-empty': 'off',
    'prettier/prettier': 'error',
    'no-multi-assign': 'off',
    'no-param-reassign': 'off',
    'no-await-in-loop': 'off',
    'no-restricted-syntax': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'import/no-extraneous-dependencies': 'off',
  },
};
