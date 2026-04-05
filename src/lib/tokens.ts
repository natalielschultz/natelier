export const tokens = {
  colors: {
    bg: {
      primary: '#F3EEE7',
      secondary: '#FFFDF8',
      tertiary: '#EBE6DF',
      white: '#FFFFFF',
    },
    text: {
      primary: '#313131',
      secondary: '#5A5A5A',
      tertiary: '#8A8A8A',
    },
    button: {
      primaryBg: '#313131',
      primaryText: '#F3EEE7',
      primaryHover: '#1A1A1A',
      secondaryBorder: '#313131',
      secondaryHoverBg: '#313131',
      secondaryHoverText: '#F3EEE7',
    },
    border: {
      primary: '#D4CFC8',
      secondary: '#E2DDD6',
    },
    interactive: {
      hover: '#EBE6DF',
      active: '#E2DDD6',
    },
  },
  fonts: {
    heading: "'Cormorant Garamond', serif",
    body: "'DM Sans', sans-serif",
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '12px',
    base: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '96px',
    '5xl': '128px',
  },
  radius: {
    sm: '2px',
    md: '4px',
    lg: '8px',
  },
  shadows: {
    card: '0 2px 8px rgba(49, 49, 49, 0.06)',
    elevated: '0 4px 16px rgba(49, 49, 49, 0.08)',
  },
  animation: {
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    duration: '0.3s',
  },
} as const;
