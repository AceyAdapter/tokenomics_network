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
    themes: [
      {
        mytheme: {     
          "primary": "#fde047",
          "secondary": "#b6e1f9",
          "accent": "#72dd66",
          "neutral": "#271F28",
          "base-100": "#324653",
          "info": "#5A91DD",
          "success": "#1C9B5C",
          "warning": "#EDCA4A",
          "error": "#EF2E5F",
        },
      },
    ],
  },
}
