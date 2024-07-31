/** @type {import('tailwindcss').Config} */
import themer from "@tailus/themer";
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./*.html", "./*.js"],
    darkMode: "class",
    safelist: ["isToggled"],
    theme: {
      fontFamily: {
        sans: ['Geist', 'Inter', ...defaultTheme.fontFamily.sans],
        mono : ['GeistMono', 'fira-code', ...defaultTheme.fontFamily.mono],
      },
        keyframes: {
            loop: {
                to: {
                    "offset-distance": "100%",
                },
            },
        },
        
    },
    
    plugins: [
        themer({
            colors: {
                'custom-hover': '#4dc7e4',
              },
            palette: {
                extend : "nature"
            },
            radius: "smoothest",
            background: "light",
            border: "light",
            padding:"large",
            components: {
                button: {
                    rounded : "2xl"
                }
            }
        })
    ],
};




