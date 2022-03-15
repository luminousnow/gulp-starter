Команди
npm run dev
npm run build

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
