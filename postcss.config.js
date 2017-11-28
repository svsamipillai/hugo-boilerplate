module.exports = (ctx) => {
  var file = ctx.file
  var opts = ctx.options

  return {
    parser: opts.parser ? opts.parser : false,
    map: (opts.env === "production") ? {inline: false} : false,
    plugins: {
      "postcss-import": {},
      "postcss-cssnext": {},
      "cssnano": (opts.env === "production") ? {autoprefixer: false} : false,
      "postcss-browser-reporter": {},
      "postcss-reporter": {}
    }
  }
}
