import * as nodePath from "path"; // імпорт модуля з node_modules

const rootFolder = nodePath.basename(nodePath.resolve()); // отримуємо назву каталогу проекта
const buildFolder = "./dist"; // каталог зібраного проекту
const sourceFolder = "./src"; // каталог з файлами розробки проекту

export const path = {
  // Шляхи файлів готового проекту
  build: {
    files: `${buildFolder}/assets/`,

    html: `${buildFolder}/`,
    css: `${buildFolder}/assets/css/`,
    js: `${buildFolder}/assets/js/`,
  },

  // Шляхи файлів розробки
  src: {
    files: `${sourceFolder}/assets/**/*.*`,

    html: `${sourceFolder}/*.html`,
    scss: `${sourceFolder}/assets/scss/style.scss`,
    js: `${sourceFolder}/assets/js/script.js`,
  },

  // Шляхи файлів за якими ведеться спостереження
  watch: {
    files: `${sourceFolder}/assets/**/*.*`,

    html: `${sourceFolder}/**/*.html`,
    scss: `${sourceFolder}/assets/scss/**/*.scss`,
    js: `${sourceFolder}/assets/js/**/*.js`,
  },

  clean: buildFolder,
  rootFolder,
  buildFolder,
  sourceFolder,
  ftp: ``, // назва каталогу на віддаленому сервері
};
