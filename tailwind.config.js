/** @type {import('tailwindcss').Config} */
module.exports = {
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#00A66F",
          foreground: "#FFFFFF",
          50: "#E6F7F0",
          100: "#CCEFE1",
          200: "#99DFC3",
          300: "#66CFA5",
          400: "#33BF87",
          500: "#00A66F",
          600: "#008559",
          700: "#006443",
          800: "#00432D",
          900: "#002217",
        },
        secondary: {
          DEFAULT: "#15235c", // update this value as needed
          foreground: "#FFFFFF",
          50: "#e7eaf3",
          100: "#cfd5e7",
          200: "#9faacF",
          300: "#6f80b7",
          400: "#3f559f",
          500: "#15235c", // update this value as needed
          600: "#111b49",
          700: "#0d1436",
          800: "#080c23",
          900: "#040611",
        },
        accent: {
          DEFAULT: "#B9EAF2",
          foreground: "#005AA7",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        "slide-in": "slide-in 0.3s ease-out",
      },
      fontFamily: {
        'cairo': ['Cairo', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-ocean': 'linear-gradient(135deg, #00A66F 0%, #15235c 100%)', // update here if needed
        'gradient-bubbles': 'radial-gradient(circle at 20% 50%, #B9EAF2 0%, transparent 50%), radial-gradient(circle at 80% 20%, #B9EAF2 0%, transparent 50%), radial-gradient(circle at 40% 80%, #B9EAF2 0%, transparent 50%)',
        'gradient-brand': 'linear-gradient(135deg, #00A66F 0%, #15235c 100%)', // update here if needed
        'gradient-hero': 'linear-gradient(135deg, #00A66F 0%, #009245 50%, #15235c 100%)', // update here if needed
        'gradient-card': 'linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
    },
  },
  plugins: [],
}
