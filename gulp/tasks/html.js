export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(app.plugins.fileInclude())
    .pipe(app.plugins.replace(/@img\//g, "assets/img/"))
    .pipe(app.gulp.dest(app.path.build.html));
};
