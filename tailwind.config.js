/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "small-down":
          "0 1px 0 0 rgba(0, 0, 0, 0.1), 0 3px 0 0 rgba(0, 0, 0, 0.06)",
        "small-left":
          "1px 0 0 0 rgba(0, 0, 0, 0.1), 2px 0 0 0 rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
