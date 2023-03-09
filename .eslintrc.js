require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    // 'eslint-config-antife',
    'eslint:recommended',
    'plugin:vue/vue3-essential',
    // '@vue/eslint-config-prettier',
    'plugin:mocha/recommended'
  ],

  // plugins: [
  //   "babel",
  //   "html",
  // ],

  rules: {
    'semi': ['error', 'never'],
    'quotes': ['error', 'single'],
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-setup-in-describe': 'off',
    'mocha/no-skipped-tests': 'off',
    'vue/no-deprecated-slot-attribute': 'off'
  },

  
  env: {
    'node': true,
    'commonjs': true,
    'vue/setup-compiler-macros': true
  }
}
