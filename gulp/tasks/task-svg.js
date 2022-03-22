import svgsprite from "gulp-svg-sprite";

export const svgSprite = () => {
  return app.gulp
    .src(app.path.src.svg)
    .pipe(
      svgsprite({
        mode: {
          stack: {
            sprite: `../icons.svg`,
            example: false, // додати файл з виглядом іконок
          },
        },
      })
    )
    .pipe(app.gulp.dest(`${app.path.sourceFolder}/assets/img/svg`))
    .pipe(app.gulp.src(app.path.src.svg))
    .pipe(app.gulp.dest(app.path.build.svg));
};
