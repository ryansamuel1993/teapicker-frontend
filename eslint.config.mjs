// eslint.config.mjs
import eslintPluginTs from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier/flat"; // flat config for Prettier
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";

export default [
  {
    files: ["**/*.{js,jsx,mjs,ts,tsx}"],
    languageOptions: {
      parser: tsParser,  // <-- Add TypeScript parser here
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        // Optional, uncomment if you want type-aware linting and have tsconfig.json:
        // project: "./tsconfig.json",
      },
    },
    plugins: {
      react: eslintPluginReact,
      "react-hooks": eslintPluginReactHooks,
      import: eslintPluginImport,
      "jsx-a11y": eslintPluginJsxA11y,
      "@typescript-eslint": eslintPluginTs,  // <-- Add TypeScript plugin
    },
    settings: {
      react: {
        version: "detect",
      },
      // For eslint-plugin-import to resolve TS files properly:
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
     'import/resolver': {
        typescript: {
          alwaysTryTypes: true, // optional but helpful
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          moduleDirectory: ['node_modules', 'src/'],
        },
      },

    },
    rules: {
      // React rules
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",

      // React hooks
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",

      // TypeScript rules (example)
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],

      // Import rules
      "import/no-unresolved": "error",
      
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],

      // Accessibility rules
      "jsx-a11y/anchor-is-valid": "warn",
      "jsx-a11y/click-events-have-key-events": "warn",
      "jsx-a11y/no-static-element-interactions": "warn",

      // Other React rules
      "react/jsx-filename-extension": ["warn", { extensions: [".jsx", ".tsx"] }],
    },
  },

  prettierConfig,
];
