import replace from "gulp-replace"; // Пошук та заміна
import versionNumber from "gulp-version-number"; // Додає версію до css та js
import browserSync from "browser-sync"; // Трансляція, оновлення сторінки браузера
import newer from "gulp-newer"; // Перевірка на нові зображення

export const plugins = {
  replace,
  versionNumber, // mv to scss
  browserSync,
  newer,
};
