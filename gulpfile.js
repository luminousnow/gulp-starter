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

// Спостерігач
function watcher() {
  gulp.watch(path.src.files, copy);
  gulp.watch(path.src.html, html);
}

// Сценарії виконання завдань
const mainTasks = gulp.parallel(copy, html);

const dev = gulp.series(reset, mainTasks, watcher);
const build = gulp;

// Gulp завдання
gulp.task("default", dev);
gulp.task("reset", reset);
gulp.task("copy", copy);
gulp.task("html", html);
