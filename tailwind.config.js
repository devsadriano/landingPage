/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      fontFamily: {
        // Fonte principal - Public Sans (como no Nuxt)
        'sans': ['Public Sans', 'Inter', 'system-ui', 'sans-serif'],
        'primary': ['Public Sans', 'Inter', 'system-ui', 'sans-serif'],
        
        // Fontes alternativas
        'display': ['Public Sans', 'Inter', 'system-ui', 'sans-serif'],
        'body': ['Public Sans', 'Inter', 'system-ui', 'sans-serif'],
        
        // Fontes para código
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
        'code': ['JetBrains Mono', 'Fira Code', 'Consolas', 'Monaco', 'monospace'],
        
        // Fontes decorativas
        'heading': ['Public Sans', 'Inter', 'system-ui', 'sans-serif'],
        'brand': ['Public Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Tamanhos semânticos
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
        
        // Tamanhos específicos do design
        'hero': ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],
        'title': ['2.25rem', { lineHeight: '1.2', fontWeight: '600' }],
        'subtitle': ['1.5rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'caption': ['0.875rem', { lineHeight: '1.4', fontWeight: '400' }],
      },
      fontWeight: {
        'thin': '100',
        'extralight': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold': '800',
        'black': '900',
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
      },
      colors: {
        // Cores principais do Nuxt
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#020617', // Cor principal central
        },
        secondary: {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#00DC82', // Cor secundária do Nuxt
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        // Tons neutros
        neutral: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
        // Cores de apoio
        accent: {
          blue: '#3b82f6',
          purple: '#8b5cf6',
          pink: '#ec4899',
          orange: '#f97316',
          yellow: '#eab308',
          red: '#ef4444',
        },
        // Estados
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
        // Cores básicas
        white: '#ffffff',
        black: '#000000',
      },
      backgroundImage: {
        // Gradientes principais
        'gradient-primary': 'linear-gradient(135deg, #020617 0%, #0c4a6e 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #00DC82 0%, #059669 100%)',
        'gradient-hero': 'linear-gradient(135deg, #020617 0%, #00DC82 100%)',
        'gradient-reverse': 'linear-gradient(135deg, #00DC82 0%, #020617 100%)',
        
        // Gradiente escuro para seções
        'gradient-dark': 'linear-gradient(135deg, #020617 0%, #020617 50%, #0c4a6e 100%)',
        'gradient-dark-br': 'linear-gradient(to bottom right, #020617 0%, #020617 50%, #0c4a6e 100%)',
        
        // Gradientes radiais
        'gradient-radial-primary': 'radial-gradient(circle, #020617 0%, #0c4a6e 100%)',
        'gradient-radial-secondary': 'radial-gradient(circle, #00DC82 0%, #059669 100%)',
        
        // Gradientes com transparência
        'gradient-primary-fade': 'linear-gradient(135deg, rgba(2, 6, 23, 0.9) 0%, rgba(12, 74, 110, 0.7) 100%)',
        'gradient-secondary-fade': 'linear-gradient(135deg, rgba(0, 220, 130, 0.9) 0%, rgba(5, 150, 105, 0.7) 100%)',
        
        // Gradientes multicoloridos
        'gradient-rainbow': 'linear-gradient(135deg, #020617 0%, #00DC82 50%, #020617 100%)',
        'gradient-sunset': 'linear-gradient(135deg, #020617 0%, #f97316 50%, #00DC82 100%)',
      },
      boxShadow: {
        'primary': '0 4px 14px 0 rgba(2, 6, 23, 0.39)',
        'secondary': '0 4px 14px 0 rgba(0, 220, 130, 0.39)',
        'primary-lg': '0 10px 25px -3px rgba(2, 6, 23, 0.5)',
        'secondary-lg': '0 10px 25px -3px rgba(0, 220, 130, 0.5)',
        'glow-primary': '0 0 20px rgba(2, 6, 23, 0.5)',
        'glow-secondary': '0 0 20px rgba(0, 220, 130, 0.5)',
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        }
      }
    },
  },
  plugins: [],
}