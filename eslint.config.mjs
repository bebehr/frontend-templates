import js from '@eslint/js';
import globals from 'globals';
import html from '@html-eslint/eslint-plugin';
import json from '@eslint/json';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores([
    '!**/.*',
    '**/dist/**',
    '**/node_modules/**',
    'package-lock.json',
  ]),
  {
    files: ['**/*.{html,htm}'],
    plugins: {
      html,
    },
    extends: ['html/recommended'],
    language: 'html/html',
    rules: {
      'html/attrs-newline': [
        'error',
        {
          closeStyle: 'newline',
          ifAttrsMoreThan: 16,
          maxLen: 80,
        },
      ],
      'html/indent': ['error', 2],
      'html/sort-attrs': [
        'error',
        {
          priority: [
            'class',
            'id',
            'name',
            'src',
            'for',
            'type',
            'rel',
            'href',
            'value',
            'title',
            'alt',
            'role',
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: { ...globals.browser, ...globals.node } },
  },
  {
    files: ['**/*.json'],
    ignores: ['.vscode/*.json', '.cspell.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },
  {
    files: ['**/*.jsonc', '.vscode/*.json', '.cspell.json'],
    plugins: { json },
    language: 'json/jsonc',
    extends: ['json/recommended'],
  },
  // Turns off all rules that are unnecessary or might conflict with Prettier.
  eslintConfigPrettier,
]);
