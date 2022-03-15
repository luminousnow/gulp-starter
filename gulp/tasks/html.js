import fileInclude from "gulp-file-include"; // Зборщик html
import webpHtmlNosvg from "gulp-webp-html-nosvg"; // Додає розмітку webp до зображень
import versionNumber from "gulp-version-number"; // Додає версію до css та js

export const html = () => {
  return app.gulp
    .src(app.path.src.html)
    .pipe(fileInclude())
    .pipe(webpHtmlNosvg())
    .pipe(app.plugins.replace(/@img\//g, "assets/img/"))
    .pipe(
      versionNumber({
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
