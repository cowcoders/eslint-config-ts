module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint'
  ],
  extends: [
    '@cowcoders/eslint-config-base'
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/type-annotation-spacing': 'error'
  }
};
