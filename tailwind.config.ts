import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}", 
    "./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}",
    "./src/lib/mobius/**/*.{html,js,svelte,ts}"
  ],

  darkMode: "selector",

  theme: {
    extend: {
      zIndex: {
        "100": "100"
      },
      colors: {
        primary: { "50": "#FFF5F2", "100": "#FFF1EE", "200": "#FFE4DE", "300": "#FFD5CC", "400": "#FFBCAD", "500": "#FE795D", "600": "#EF562F", "700": "#EB4F27", "800": "#CC4522", "900": "#A5371B" },
        secondary: { "50": "#f0f9ff", "100": "#e0f2fe", "200": "#bae6fd", "300": "#7dd3fc", "400": "#38bdf8", "500": "#0ea5e9", "600": "#0284c7", "700": "#0369a1", "800": "#075985", "900": "#0c4a6e" },
        mobius_primary: 'var(--primary-color)',
        mobius_secondary: 'var(--secondary-color)',
        mobius_success: 'var(--green-color)',
        mobius_warning: 'var(--yellow-color)',
        mobius_error: 'var(--red-color)',
        mobius_basic: 'white'
      }
    }
  }
} as Config;
