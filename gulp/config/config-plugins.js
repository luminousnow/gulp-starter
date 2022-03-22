import replace from "gulp-replace"; // Пошук та заміна
import browserSync from "browser-sync"; // Трансляція, оновлення сторінки браузера
import newer from "gulp-newer"; // Перевірка на нові зображення
import gulpIf from "gulp-if";

export const plugins = {
  replace,
  browserSync,
  newer,
  if: gulpIf,
};
