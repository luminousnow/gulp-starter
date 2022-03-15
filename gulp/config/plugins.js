import replace from "gulp-replace"; // Пошук та заміна
import browserSync from "browser-sync"; // Трансляція, оновлення сторінки браузера
import newer from "gulp-newer"; // Перевірка на нові зображення

export const plugins = {
  replace,
  browserSync,
  newer,
};
