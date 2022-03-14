export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(app.plugins.fileInclude())
    .pipe(app.plugins.webpHtmlNosvg())
    .pipe(app.plugins.replace(/@img\//g, "assets/img/"))
    .pipe(
      app.plugins.versionNumber({
        value: "%DT%",
        append: {
          key: "_v",
          cover: 0,
          to: ["css", "js"],
        },
        output: {
          file: "gulp/version.json",
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.html))
    .pipe(app.plugins.browserSync.stream());
};
