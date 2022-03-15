import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

// Глобальна змінна
global.app = {
  gulp,
  path,
  plugins,
};

// Таски
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { img } from "./gulp/tasks/img.js";
import {
  otfToTtf,
  ttfToWoff,
  ttfToWoff2,
  fontsStyle,
} from "./gulp/tasks/fonts.js";

// Спостерігач
function watcher() {
  gulp.watch(path.src.html, html);
  gulp.watch(path.src.scss, scss);
  gulp.watch(path.src.js, js);
  gulp.watch(path.src.img, img);
}

// Сценарії Gulp
const fonts = gulp.series(otfToTtf, ttfToWoff, ttfToWoff2, fontsStyle);
const mainTasks = gulp.series(fonts, gulp.parallel(html, scss, js, img));

const dev = gulp.series(reset, mainTasks, gulp.parallel(server, watcher));
const build = gulp;

// Завдання Gulp
gulp.task("default", dev);
gulp.task("reset", reset);
gulp.task("html", html);
gulp.task("scss", scss);
gulp.task("js", js);
gulp.task("img", img);
gulp.task("fonts", fonts);
