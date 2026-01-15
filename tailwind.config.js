/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dribble: "#ea4c89",
        instagram: "#C13584",
        linkedin: "#0A66C2",
        github: "#171515",
        twitter: "#1DA1F2",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
