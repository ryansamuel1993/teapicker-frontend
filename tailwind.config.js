import { breakpoints } from './service/constants/breakpoints';

module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        moduleDirectory: ['node_modules', 'src/'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  theme: {
     screens: {
      sm: breakpoints.sm,
      md: breakpoints.md,
      lg: breakpoints.lg,
      xl: screens.xl,
      '2xl': screens['2xl'],
    },
    extend: {
      colors: {
        primary: '#1E3A8A',
        secondary: '#14171A',
        accent: '#657786',
        background: '#F5F8FA',
        text: '#14171A',
        glass: 'rgba(255, 255, 255, 0.5)',

      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
    },
  },
}