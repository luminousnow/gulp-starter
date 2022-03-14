import fileInclude from "gulp-file-include"; // Зборщик html
import replace from "gulp-replace"; // Пошук та заміна
import webpHtmlNosvg from "gulp-webp-html-nosvg"; // webp формат зображень
import versionNumber from "gulp-version-number"; // Додає версію до css та js
import browserSync from "browser-sync"; // Трансляція, оновлення сторінки браузера

export const plugins = {
  fileInclude,
  replace,
  webpHtmlNosvg,
  versionNumber,
  browserSync,
};
