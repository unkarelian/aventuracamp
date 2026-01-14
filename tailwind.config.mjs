/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ee7c2b',
        'background-light': '#f8f7f6',
        'background-dark': '#221810',
        'surface-dark': '#332419',
        'border-brown': '#483323',
        'text-cream': '#f3ece4',
        'text-muted': '#c9a992',
      },
      fontFamily: {
        display: ['Newsreader', 'serif'],
        body: ['Noto Sans', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        '2xl': '1rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
};
