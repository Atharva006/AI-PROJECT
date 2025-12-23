import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0dccf2',
        'primary-dark': '#0ab8da',
        secondary: '#315f68',
        'background-light': '#f0f4f5',
        'background-dark': '#102023',
        'surface-dark': '#182f34',
        'surface-light': '#ffffff',
        'text-main': '#ffffff',
        'text-muted': '#90c1cb',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Noto Sans', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        full: '9999px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/container-queries')],
}

export default config
