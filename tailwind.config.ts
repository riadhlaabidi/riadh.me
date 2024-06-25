import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-fira-code)'],
      },
      colors: {
        'bg': '#1a1b26',
        'bg-dark': '#16161e',
        'highlight': '#292e42',
        'fg': '#c0caf5',
        'fg-dark': '#a9b1d6',
        'blue': '#7aa2f7',
        'blue1': '#2ac3de',
        'blue5': '#89ddff',
        'dark5': '#737aa2',
        'yellow': '#e0af68',
        'orange': '#ff9e64',
        'comment': '#565f89',
        'red': '#f7768e',
        'green': '#9ece6a',
        'green1': '#73daca',
        'green2': '#41a6b5',
      },
    },
  },
};
export default config;
