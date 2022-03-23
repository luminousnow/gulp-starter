import svgsprite from "gulp-svg-sprite";
import cheerio from "gulp-cheerio";

export const svgSprite = () => {
  return app.gulp
    .src(app.path.src.svg, {})
    .pipe(
      // прибираємо зайві стилі щоб вони не перебивали css
      cheerio({
        run: function ($) {
          $("[fill]").removeAttr("fill");
          $("[stroke]").removeAttr("stroke");
          $("[style]").removeAttr("style");
        },
        parserOptions: { xmlMode: true },
      })
    )
    .pipe(app.plugins.replace("&gt;", ">")) // фіксим баг роботи cheerio
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
    .pipe(app.gulp.dest(`${app.path.sourceFolder}/assets/img/svg/`))
    .pipe(
      app.gulp.src(`${app.path.sourceFolder}/assets/img/svg/icons.svg`, {
        allowEmpty: true,
      })
    )
    .pipe(app.gulp.dest(app.path.build.svg));
};
