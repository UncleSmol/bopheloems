/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#d32f2f',
          dark: '#b71c1c',
          light: '#ff6659',
        },
        secondary: {
          DEFAULT: '#1976d2',
          dark: '#0d47a1',
          light: '#63a4ff',
        },
        accent: {
          DEFAULT: '#ffd600',
          dark: '#c7a500',
        },
        success: '#43a047',
        warning: '#ffa000',
        danger: '#c62828',
        info: '#0288d1',
        background: '#f7f8fa',
        surface: {
          DEFAULT: '#ffffff',
          alt: '#f1f3f6',
        },
        border: '#e0e0e0',
        text: {
          DEFAULT: '#222222',
          muted: '#5a5a5a',
          inverse: '#ffffff',
        },
        link: {
          DEFAULT: '#1976d2',
          hover: '#d32f2f',
        },
      },
      fontFamily: {
        title: ['Archivo Black', 'Arial', 'sans-serif'],
        logo: ['Story Script', 'cursive'],
        body: ['Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        md: '1rem',
        lg: '1.25rem',
        xl: '1.5rem',
        xxl: '2.25rem',
        hero: '3.5rem',
      },
      spacing: {
        '2xs': '0.25rem',
        xs: '0.5rem',
        sm: '0.75rem',
        md: '1rem',
        lg: '1.5rem',
        xl: '2rem',
        xxl: '3rem',
      },
      borderRadius: {
        sm: '0.25rem',
        md: '0.5rem',
        lg: '1rem',
        pill: '9999px',
      },
      boxShadow: {
        xs: '0 1px 2px rgba(33, 33, 33, 0.08)',
        sm: '0 2px 6px rgba(33, 33, 33, 0.08)',
        md: '0 4px 12px rgba(33, 33, 33, 0.08)',
        lg: '0 8px 24px rgba(33, 33, 33, 0.08)',
      },
      transitionDuration: {
        fast: '120ms',
        normal: '220ms',
        slow: '350ms',
      },
      transitionTimingFunction: {
        'ease-custom': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      zIndex: {
        header: '1000',
        modal: '2000',
        toast: '3000',
        tooltip: '4000',
      },
    },
  },
  plugins: [],
}