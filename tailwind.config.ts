import type { Config } from 'tailwindcss'


const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A',  // Navy Blue
        accent: '#FF6F61',   // Bright Coral
        teal: '#0D9488',     // Vibrant Teal
        purple: '#8B5CF6',   // Soft Purple
        bg: '#f1f1f1',       // Background
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      maxWidth: {
        section: '1310px',
      }
    },
  },
  plugins: [],
}
export default config
