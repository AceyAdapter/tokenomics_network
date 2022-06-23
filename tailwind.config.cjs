module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      width: {
        '76': '19rem',
        '128': '32rem'
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [{
      cyberpunk: {
        ...require("daisyui/src/colors/themes")["[data-theme=cyberpunk]"],
        "base-100": "#121a26",
        primary: "#91e31d",
        secondary: "#e3d21d",
        accent: "#d21de3",
        "base-content": "#d9d9d9"
      }
    }],
  },
}
