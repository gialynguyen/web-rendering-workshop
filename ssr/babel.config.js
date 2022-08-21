module.exports = {
  presets: [
    [
      "@babel/env",
      {
        targets: "> 0.25%, not dead",
      },
    ],
    "@babel/react",
  ],
  plugins: [
    [
      "transform-assets",
      {
        extensions: ["css", "svg"],
      },
    ],
  ],
};