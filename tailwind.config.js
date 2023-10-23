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
        'login-image': "url('https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpVmOHiw.png')"
      },
    },
  },
  plugins: [],
}
