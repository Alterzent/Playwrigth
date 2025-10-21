import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    // Global ignores
    ignores: [
      'dist/**',
      'node_modules/**',
      'reports/**',
      'test-results/**',
      '*.config.js',
      'scripts/**/*.js',
    ],
  },

  // Base JavaScript rules
  js.configs.recommended,

  // TypeScript configuration
  ...tseslint.configs.recommended,

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-inferrable-types': 'off',

      // General code quality rules
      'no-console': 'off', // Allow console for debugging in tests
      'no-debugger': 'error',
      'no-duplicate-imports': 'error',
      'no-unused-expressions': 'error',
      'prefer-const': 'error',
      'prefer-template': 'warn',

      // Style rules (compatible with Prettier)
      indent: 'off', // Disabled in favor of Prettier
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      semi: ['error', 'always'],
      'object-curly-spacing': 'off', // Handled by Prettier
      'array-bracket-spacing': 'off', // Handled by Prettier

      // Best practices
      eqeqeq: ['error', 'always'],
      'no-var': 'error',
      'prefer-arrow-callback': 'error',
      'arrow-spacing': 'off', // Handled by Prettier
      'no-multiple-empty-lines': 'off', // Handled by Prettier
      'no-trailing-spaces': 'off', // Handled by Prettier
    },
  },

  // Test-specific configuration
  {
    files: ['tests/**/*.ts', 'step-definitions/**/*.ts', '**/*.steps.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off', // More flexible in tests
      'no-console': 'off', // Allow console in tests
    },
  },

  // Page Objects configuration
  {
    files: ['src/pages/**/*.ts', 'page-objects/**/*.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      'no-console': 'warn',
    },
  },

  // Prettier config (disables conflicting rules) - must be last
  prettier
);
