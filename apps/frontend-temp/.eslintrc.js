// apps/frontend-temp/.eslintrc.js
module.exports = {
  root: true,
  extends: [
    '../../packages/config/.eslintrc.js',
    'next/core-web-vitals',
  ],
  rules: {},
  parserOptions: {
    project: ['./tsconfig.json'],
  },
};
