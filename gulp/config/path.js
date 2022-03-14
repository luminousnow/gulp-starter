import * as nodePath from "path"; // імпорт модуля з node_modules

const rootFolder = nodePath.basename(nodePath.resolve()); // отримуємо назву каталогу проекта
const buildFolder = "./dist"; // каталог зібраного проекту
const sourceFolder = "./src"; // каталог з файлами розробки проекту

export const path = {
  // шляхи до файлів зібраного проекту
  build: {
    html: `${buildFolder}/`,
    files: `${buildFolder}/assets/`,
  },

  // шляхи до файлів розробки
  src: {
    html: `${sourceFolder}/*.html`,
    files: `${sourceFolder}/assets/**/*.*`,
  },

  // шляхи до файлів над якими ведеться спостереження
  watch: {
    html: `${sourceFolder}/**/*.*`,
    files: `${sourceFolder}/assets/**/*.*`,
  },

  clean: buildFolder,
  rootFolder,
  buildFolder,
  sourceFolder,
  ftp: ``, // назва каталогу на віддаленому сервері
};
