const makeColors = (colors) => {
  return Object.fromEntries(
    colors.map((value) => {
      return [value, `var(--${value})`];
    })
  );
};

module.exports = {
  purge: ["./src/**/*.svelte", "./src/**/*.html"],

  theme: {
    fontFamily: {
      serif: ["serif"],
      helvetica: ["Helvetica", "Arial", "sans-serif"],
    },

    extend: {
      fontSize: {
        xxs: "0.6667rem",
        xxl: "1.7rem",
      },

      borderRadius: {
        lg: "16px",
      },

      screens: {},

      colors: makeColors([
        "c-button-primary",
        "c-border-1",
        "c-border-2",
        "c-border-3",
        "c-bg-primary",
        "c-bg-complement",
        "c-header-1",
        "c-text-1",
        "c-header-1-complement",
        "c-text-1-complement",
        "c-bg-secondary-twitter",
        "c-border-twitter",
        "c-text-twitter",
        "c-header-twitter",
        "c-button-twitter",
        "c-link-twitter",
        "c-link-2-twitter",
        "c-button-2-twitter",
      ]),
    },
  },
  variants: {},
  plugins: [],
};
