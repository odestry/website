import type {Config} from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        screen: 'var(--screen-height, 100vh)',
      },
    },
  },
  plugins: [],
} satisfies Config;
