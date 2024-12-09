/** @type {import('tailwindcss').Config} */

import plugin from "tailwindcss-pseudo-elements";
import scrollbar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        spartan: ["Spartan", "sans-serif"],
        spartanBold: ["SpartanBold", "sans-serif"],
      },

      colors: {
        1: "#7C5DFA",
        2: "#9277FF",
        3: "#1E2139",
        4: "#252945",
        5: "#DFE3FA",
        6: "#888EB0",
        7: "#7E88C3",
        8: "#0C0E16",
        9: "#EC5757",
        10: "#FF9797",
        11: "#F8F8FB",
        12: "#141625",
        13: "#373B53",
        divisor: "#494E6E",
        pending: "#FF8F00",
        draft: "#979797",
        paid: "#33D69F",
        pendingBG: "#FFF8F0",
        draftBG: "#F3F3F5",
        paidBG: "#F3FCF9",
        itemList: '#777F98'
      },
    },
  },
  plugins: [
    scrollbar,
    plugin({
      customPseudoClasses: ["autofill"],
    }),
  ],
};
