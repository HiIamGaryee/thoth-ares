/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        neon: {
          DEFAULT: '#00ff00',
          dim: '#b5ffb5',
        },
        background: '#000000',
        foreground: '#00ff00',
        tertiary: '#151030',
        secondary: '#aaa6c3',
        accent: '#bf61ff',
        destructive: '#ea4335',
        card: '#000000',
        popover: '#ffffff',
        muted: '#aaa6c3',
        input: '#00ff00',
        ring: '#00ff00',
      },
      backgroundImage: {
        'retro-grid': `linear-gradient(to right, rgba(0, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 255, 0, 0.1) 1px, transparent 1px)`,
        'black-gradient': `linear-gradient(to right, #434343, #000000)`,
        'violet-gradient': `linear-gradient(-90deg, #804dee 0%, rgba(60, 51, 80, 0) 100%)`,
        'green-pink-gradient': `linear-gradient(90.13deg, #00cea8 1.9%, #bf61ff 97.5%)`,
        'orange-text-gradient': `linear-gradient(to top, #f12711, #f5af19)`,
        'green-text-gradient': `linear-gradient(to top, #11998e, #38ef7d)`,
        'blue-text-gradient': `linear-gradient(to top, #2f80ed, #56ccf2)`,
        'pink-text-gradient': `linear-gradient(to top, #ec008c, #fc6767)`,
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        pixel: ['"Press Start 2P"', 'cursive'],
        pixer: ['Pixer', 'monospace'],
      },
      boxShadow: {
        neon: '0 0 8px #00ff00',
      },
      borderColor: {
        neon: '#00ff00',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  safelist: [
    'border-neon',
    'shadow-neon',
    'text-neon-dim',
    'bg-retro-grid',
    'font-pixel',
    'bg-black-gradient',
    'bg-violet-gradient',
    'bg-green-pink-gradient',
    'bg-orange-text-gradient',
    'bg-green-text-gradient',
    'bg-blue-text-gradient',
    'bg-pink-text-gradient',
    'font-pixer',
  ],
};
