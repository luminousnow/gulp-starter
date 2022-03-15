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
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { server } from "./gulp/tasks/server.js";
import { scss } from "./gulp/tasks/scss.js";
import { js } from "./gulp/tasks/js.js";
import { img } from "./gulp/tasks/img.js";

// Спостерігач
function watcher() {
  gulp.watch(path.src.files, copy);
  gulp.watch(path.src.html, html);
  gulp.watch(path.src.scss, scss);
  gulp.watch(path.src.js, js);
  gulp.watch(path.src.img, img);
}

// Сценарії Gulp
const mainTasks = gulp.parallel(copy, html, scss, js, img);

const dev = gulp.series(reset, mainTasks, gulp.parallel(server, watcher));
const build = gulp;

// Завдання Gulp
gulp.task("default", dev);
gulp.task("reset", reset);
gulp.task("copy", copy);
gulp.task("html", html);
gulp.task("scss", scss);
gulp.task("js", js);
gulp.task("img", img);
