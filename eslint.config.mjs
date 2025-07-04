import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import globals from "globals";
import importPlugin from "eslint-plugin-import";
import eslintComments from "eslint-plugin-eslint-comments";
import reactHooks from "eslint-plugin-react-hooks";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import prettier from 'eslint-plugin-prettier';

export default [
  reactRecommended,
  {
  ignores: [
    ".next",
    "dist",
    "build",
    "node_modules",
    "**/*.mjs",
    "**/*.js",
    "**/src/gql/generated.ts",
    "**/service/gql/index.gql.ts",
  ],
},

  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: typescriptParser,
      parserOptions: {
        project: ['./tsconfig.json'],
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
      version: "detect",
      },
 
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      prettier,
      react,
      import: importPlugin,
      "eslint-comments": eslintComments,
      "react-hooks": reactHooks,
      "jsx-a11y": jsxA11y,
    },
    rules: {
      "prettier/prettier": ["error"],
      curly: ["error", "all"],
      eqeqeq: ["error", "smart"],
      "no-console": "off",
      "no-void": ["error", { allowAsStatement: true }],
      "prefer-regex-literals": ["error", { disallowRedundantWrapping: false }],
      "consistent-return": "off",
      "no-useless-return": "off",
      "no-irregular-whitespace": "off",
      "react/self-closing-comp": "warn",

      "no-param-reassign": "off",

      // ESLint comments
      "eslint-comments/no-unused-disable": "warn",
      "eslint-comments/no-unused-enable": "warn",

      // Import behavior
      "import/extensions": [
        "error",
        "never",
        { json: "always", svg: "always", css: "always",  gql: "always"},
      ],
      "import/order": [
        "error",
        {
          groups: [["external", "builtin"], "internal", ["parent", "sibling", "index"]],
        },
      ],
      "import/no-default-export": "off",
      "import/prefer-default-export": "off",
      "import/no-cycle": "off",
      "import/no-extraneous-dependencies": "off",

      // Padding
      "padding-line-between-statements": [
        "error",
        {
          blankLine: "always",
          prev: "*",
          next: ["block-like", "return", "class"],
        },
        {
          blankLine: "always",
          prev: ["block-like", "return", "class"],
          next: "*",
        },
        {
          blankLine: "any",
          prev: "default",
          next: "case",
        },
      ],

      // Restricted imports/globals
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "react",
              importNames: ["default"],
              message: "Please use named imports instead.",
            },
          ],
          patterns: ["components", "service"].map((dir) => ({
            group: [`./${dir}`, `../${dir}`, `**/../${dir}`],
            message: `Please use the @/${dir} alias instead`,
          })),
        },
      ],
      "no-restricted-globals": [
        "error",
        {
          name: "React",
          message: "Please use named imports instead.",
        },
      ],

      // React
      "react/display-name": "warn",
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/no-unstable-nested-components": ["warn", { allowAsProps: true }],
      "react/no-string-refs": "warn",
      "react/prop-types": "off",
      "react/style-prop-object": "off",
      "react/function-component-definition": [
        "error",
        { namedComponents: "arrow-function" },
      ],
      "react/no-array-index-key": "off",
      "react/jsx-props-no-spreading": "off",
      "react/jsx-filename-extension": ["error", { extensions: [".jsx", ".tsx"] }],
      "react/no-unescaped-entities": "off",
      "react/require-default-props": "off",
      "react/destructuring-assignment": [
        "error",
        "always",
        { destructureInSignature: "always" },
      ],

      // React Hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "error",

      // TypeScript
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-unused-vars": "error",
      "@typescript-eslint/prefer-for-of": "error",
      "@typescript-eslint/prefer-optional-chain": "error",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
      "@typescript-eslint/no-unnecessary-type-arguments": "error",
      "@typescript-eslint/prefer-string-starts-ends-with": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/unified-signatures": "error",
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: false },
      ],
      "@typescript-eslint/await-thenable": "error",
      "@typescript-eslint/naming-convention": "off",
      "@typescript-eslint/no-unsafe-*": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/restrict-plus-operands": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  },
];