module.exports = {
  env: { browser: true, es2021: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier', // Add prettier to avoid conflicts
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['@typescript-eslint'],
  rules: {},
  ignorePatterns: ['node_modules', 'dist', '.turbo', '*.js', '*.json'], // Ignore JS config files and JSON files
};
