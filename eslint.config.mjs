import { FlatCompat } from '@eslint/eslintrc';
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  globalIgnores([
    '.next/**',
    './public/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
  {
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
  },
  eslintPluginPrettierRecommended,
  ...compat.config({
    rules: {
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // Packages.
            // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
            ['^react$', '^@?\\w'],
            ['^assets.*', '\\.(png|svg|gif)$'],
            // Side effect imports + styles.
            ['^\\u0000', '^styles', '\\.scss$', '\\.module\\.scss'],
            // Local import paths and aliases
            [
              '^pages',
              '^components',
              '^fetchers',
              '^store',
              '^ui',
              '^utils',
              '^\\.',
            ],
          ],
        },
      ],
      'simple-import-sort/exports': 'off',
      'prettier/prettier': ['error', {}, { usePrettierrc: true }],
    },
  }),
]);

export default eslintConfig;
