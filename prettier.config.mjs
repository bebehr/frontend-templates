/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  singleQuote: true,
  plugins: [
    '@awmottaz/prettier-plugin-void-html',
    'prettier-plugin-packagejson',
  ],

  // Overrides for specific file types
  overrides: [
    {
      files: ['**/*.md'],
      options: {
        proseWrap: 'always',
      },
    },
  ],
};

export default config;
