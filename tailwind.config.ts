import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        dark: {
          1: '#1c1f2e',
          2: '#161925',
          3: '#252A41',
          4: '#1E2757',
        },
        sky: {
          1: '#C9DDFF',
          2: '#ECF0FF',
          3: '#F5FCFF',
        },
        orange: {
          1: '#FF742E',
        },
        green: {
          1: '#f4ffff',
          2: '#00aea8',
          3: '#F4FFFF',
          4: '#041F20'
        },
        violet: {
          1: '#5048F8',
          2: '#EEEDFF',
          3: '#F5F7FB'
        },
        blue: {
          1: '#0186FD',
          2: '#DAEDFE',
          3: '#F6F9FF',
          4: '#03294B'
        },
        yellow: {
          1: '#F9A90E',
        },
        purple: {
          1: '#14188B',
          2: '#525597',
        },
      },
      backgroundImage: {
        hero: "url('/images/health.jpg')",
        landingHero: "url('/images/meet-up.jpg')",
        story: "url('/images/laptopGirlSmiling.jpg')"
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config