import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        aubergine: {
          dark:  '#130e1c',
          DEFAULT: '#1c1228',
        },
        'rose-gold': {
          DEFAULT: '#b8906a',
          light: '#dcc0a0',
        },
        parchment: {
          DEFAULT: '#fdf8f2',
          cream: '#f7f0e6',
        },
        divider: '#e0ceb8',
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
