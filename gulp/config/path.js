import * as nodePath from "path"; // імпорт модуля з node_modules

const rootFolder = nodePath.basename(nodePath.resolve()); // отримуємо назву каталогу проекта
const buildFolder = "./dist"; // каталог зібраного проекту
const sourceFolder = "./src"; // каталог з файлами розробки проекту

export const path = {
  // шляхи до файлів зібраного проекту
  build: {
    files: `${buildFolder}/assets/`,
    css: `${buildFolder}/assets/css/`,

    html: `${buildFolder}/`,
  },

  // шляхи до файлів розробки
  src: {
    files: `${sourceFolder}/assets/**/*.*`,
    scss: `${sourceFolder}/assets/scss/style.scss`,
    html: `${sourceFolder}/*.html`,
  },

  // шляхи до файлів над якими ведеться спостереження
  watch: {
    files: `${sourceFolder}/assets/**/*.*`,
    scss: `${sourceFolder}/assets/scss/**/*.*`,
    html: `${sourceFolder}/**/*.*`,
  },

  clean: buildFolder,
  rootFolder,
  buildFolder,
  sourceFolder,
  ftp: ``, // назва каталогу на віддаленому сервері
};
