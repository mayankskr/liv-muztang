module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'tailwindcss'],
  rules: {
    // Prettier decides formatting
    'prettier/prettier': 'warn',

    // Tailwind handled by Prettier
    'tailwindcss/classnames-order': 'on',
    'tailwindcss/no-custom-classname': 'off',

    // React (Vite specific)
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
