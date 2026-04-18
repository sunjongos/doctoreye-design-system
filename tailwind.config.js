/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        doc: {
          mint: '#17B798',
          navy: '#1A2B3C',
          bg: '#F4F7F6',
          white: '#FFFFFF'
        }
      },
      fontFamily: {
        sans: ['Pretendard', 'Noto Sans KR', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
