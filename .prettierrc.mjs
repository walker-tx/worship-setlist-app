// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss",
    "prettier-plugin-svelte",
    "prettier-plugin-astro-organize-imports",
  ],
  tailwindFunctions: ["tv"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
    {
      files: "*.svelte",
      options: {
        parser: "svelte",
      },
    },
  ],
};
