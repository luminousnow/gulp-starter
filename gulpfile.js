import gulp from "gulp";
import { path } from "./gulp/config/path.js";
import { plugins } from "./gulp/config/plugins.js";

// Глобальна змінна
global.app = {
  isBuild: process.argv.includes("--prod"),
  isDev: !process.argv.includes("--prod"),
  gulp,
  path,
  plugins,
};

// Таски
import { reset } from "./gulp/tasks/reset.js"; // Очистка каталога .dist
import { githubDeploy } from "./gulp/tasks/task-githubDeploy.js"; // Деплой на GitHub
import { server } from "./gulp/tasks/server.js"; // Запуск стріму
import { html } from "./gulp/tasks/html.js"; // Обробка html
import { scss } from "./gulp/tasks/scss.js"; // Обробка scss
import { js } from "./gulp/tasks/js.js"; // Обробка js
import { img } from "./gulp/tasks/img.js"; // Обробка img
import { svgSprite } from "./gulp/tasks/svg.js"; // Обробка svgSprite

import {
  otfToTtf,
  ttfToWoff,
  ttfToWoff2,
  fontsStyle,
} from "./gulp/tasks/fonts.js";

// Спостерігач
function watcher() {
  gulp.watch(path.watch.html, html);
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
  gulp.watch(path.watch.img, img);
  gulp.watch(path.watch.svg, svgSprite);
}

// Сценарії Gulp
const fonts = gulp.series(otfToTtf, ttfToWoff, ttfToWoff2, fontsStyle); // Конвертація шрифтів
const mainTasks = gulp.series(
  fonts,
  gulp.parallel(html, scss, js, img, svgSprite)
);

const dev = gulp.series(reset, mainTasks, gulp.parallel(server, watcher));
const build = gulp.series(reset, mainTasks);
const deploy = gulp.series(build, githubDeploy);

// Експорт
export { dev, build, deploy, reset };

// Завдання Gulp
gulp.task("default", dev);
gulp.task("build", build);
gulp.task("deploy", deploy);
gulp.task("reset", reset);
