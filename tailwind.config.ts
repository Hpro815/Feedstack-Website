import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0F',
        card: '#111118',
        purple: '#6C63FF',
        green: '#3ecf8e',
        white: '#F0F0FF',
        muted: '#888899',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        'h1-desktop': '72px',
        'h1-mobile': '40px',
        'h2-desktop': '48px',
        'h2-mobile': '32px',
        'h3-desktop': '32px',
        'h3-mobile': '24px',
        'body-desktop': '18px',
        'body-mobile': '16px',
      },
      borderColor: {
        accent: 'rgba(108,99,255,0.15)',
      },
    },
  },
  plugins: [],
}
export default config
