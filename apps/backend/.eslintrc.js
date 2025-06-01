// apps/backend/.eslintrc.js
module.exports = {
  root: true,
  extends: [
    '../../packages/config/.eslintrc.js',
  ],
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  env: {
    node: true,
    es2021: true
  },
  rules: {
  },
};
