/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#181A22',
        'ink-soft': '#5B6169',
        'ink-faint': '#9AA0A8',
        surface: '#FFFFFF',
        'surface-subtle': '#F5F3FE',
        line: '#E5E6F0',

        'ink-dark': '#F3F4F8',
        'ink-dark-soft': '#9AA1B2',
        'surface-dark': '#0B0E17',
        'surface-dark-subtle': '#121623',
        'line-dark': '#242A3B',

        up: '#16A34A',
        'up-soft': '#E6F7EC',
        accent: '#5B4FE9',
        'accent-soft': '#EEECFF',
        violet: '#5B4FE9',
        'violet-soft': '#EEECFF',
        teal: '#0D9488',
        'teal-soft': '#E1F5F1',
        amber: '#D97706',
        'amber-soft': '#FEF3E2',
        rose: '#E11D74',
        'rose-soft': '#FDEAF2',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
