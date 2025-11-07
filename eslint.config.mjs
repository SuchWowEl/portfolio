// @ts-check

import withNuxt from "./.nuxt/eslint.config.mjs";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
// import prettierConfig from "eslint-config-prettier";
import stylistic from "@stylistic/eslint-plugin";
import pluginVue from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";

export default withNuxt(
  {
    ignores: ["**/*.d.ts", "**/coverage/**", "**/dist/**", ".nuxt/*", "eslint.config.mjs"],
  },
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylisticTypeChecked,
  // prettierConfig,
  {
    files: ["**/*.{ts,vue}"],
    plugins: {
			pluginVue,
      "@stylistic": stylistic,
    },
    rules: {
      // "@stylistic/no-tabs": ["error", { allowIndentationTabs: true }],
			"vue/html-indent": ["error", 2],
      "@stylistic/indent": ["error", 2],
      "vue/html-quotes": ["error", "double"],
      "@stylistic/quotes": ["error", "double"],
      "@stylistic/semi": ["error", "always"],
      "vue/brace-style": ["error", "1tbs"],
      "@stylistic/brace-style": ["error", "1tbs"],
      "vue/multi-word-component-names": "off",
    },
  },
  {
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        projectService: true,
        extraFileExtensions: [".vue"],
      },
    },
  },
);
