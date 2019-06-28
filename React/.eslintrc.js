module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "standard"
  ],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "no-unused-vars": 0,
    "space-before-function-paren": ["error", "never"],
    "react/display-name": 0,
    "react/prop-types": 0,
    "semi": ["warn", "never"],
    "quotes": ["warn", "single"],
    'eqeqeq': [
      'error',
      'always',
      {
        null: 'ignore'
      }
    ],
    'indent': [
      'warn',
      2,
      {
        SwitchCase: 1,
        flatTernaryExpressions: true
      }
    ]
  },
  settings: {
    react: {
      version: "16.4.2"
    }
  }
}
