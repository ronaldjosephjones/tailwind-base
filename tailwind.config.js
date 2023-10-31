module.exports = {
  content: ["./*.css"],
  theme: {
    fontFamily: {
      sans: "var(--font-family)",
    },
      //we can turn things off in here to lower file sizes
      corePlugins: {
          // Spacing
          padding: false,
          margin: false,
          space: false,
 
          // Interactivity
          cursor: false,
          pointerEvents: false,
          resize: false,
          userSelect: false,
          
        },
    extend: {
      colors: {
        brand: {
          bright: "var(--brand-bright)",
          DEFAULT: "var(--brand-default)",
          dark: "var(--brand-dark)",
          accent: "var(--brand-accent)",
        },
      },
    },
  },
};
