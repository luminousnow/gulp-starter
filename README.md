Команди
npm run dev
npm run build

Функціонал
Шаблонізатор File include
Автоматичний запуск сервера, трансляція проекту в реальному часі (browser-sync)
Шаблонізато HTML (рgulp-file-include)
Автоматична конвертацыя шрифтыв (gulp-fonter, gulp-ttf2woff2)
Мініфікація CSS (gulp-clean-css)
Підтримка стилів у попередніх версіях браузерів (gulp-autoprefixer)
Групування медіаправил (gulp-group-css-media-queries)
Мініфікація HTML (gulp-htmlmin)
Мініфікація зображень (gulp-imagemin)
Препроцесор SCSS (gulp-sass)
Автоматичне формування SVG sprite (gulp-svg-sprite)
Автоматична розмытка для зображень в HTML (gulp-webp-html-nosvg)
Автоматичне створення файлів у webp форматі (webp-converter, gulp-webp)
Обробка, мініфікація JS (webpack-stream)
інші

dev (режим розробки)

- робота через шаблонізатор html include
- конвертація шрифтів з .otf, .ttf в .woff і .woff2
- препроцесор scss, sourcemaps
- js webpack, sourcemaps
- створення svg спрайту
- browserSync

src
--html
--index.html
--assets
----fonts
----img
------svg
----js
------modules
------script.js
----scss
------style.scss

build (режим продакшин)

- препроцесор scss, групування медіаправил, автопрефіксер, мініфікація
- js webpack, мініфікація
- оптимізація зображень, автоматичне створення webp зображень на основі існуючих
- створення svg спрайту

dist
--index.html
--assets
----fonts
----img
------svg
----js
------modules
------script.min.js
----scss
------style.min.css
