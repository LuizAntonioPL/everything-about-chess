/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'login-image': "url('https://media.istockphoto.com/id/1280096529/photo/close-up-of-chessmen-on-chessboard.jpg?s=612x612&w=0&k=20&c=SWP4H8luD-Wrgz-FThOVp00-zOtGOwaNs6GTwZU-QoI=')",
        'login-image-l': "url('https://media.istockphoto.com/id/1385299410/photo/white-chess-pieces-on-chess-board.webp?b=1&s=170667a&w=0&k=20&c=wqkAKQzHrTNh_zLwe9dHAGhKzdLiWbglhbqBAXb9svw=')",
      },
    },
  },
  plugins: [],
}
