<h2>Функціонал</h2>

- Шаблонізатор File include
- Автоматичний запуск сервера, трансляція проекту в реальному часі (browser-sync)
- Шаблонізато HTML (рgulp-file-include)
- Автоматична конвертацыя шрифтыв (gulp-fonter, gulp-ttf2woff2)
- Мініфікація CSS (gulp-clean-css)
- Підтримка стилів у попередніх версіях браузерів (gulp-autoprefixer)
- Групування медіаправил (gulp-group-css-media-queries)
- Мініфікація HTML (gulp-htmlmin)
- Мініфікація зображень (gulp-imagemin)
- Препроцесор SCSS (gulp-sass)
- Автоматичне формування SVG sprite (gulp-svg-sprite)
- Автоматична розмытка для зображень в HTML (gulp-webp-html-nosvg)
- Автоматичне створення файлів у webp форматі (webp-converter, gulp-webp)
- Обробка, мініфікація JS (webpack-stream)
- інші

<h2>Команди</h2>

- `npm run dev`
- `npm run build`
- `npm run deploy`
- `npm run reset`

<h3>dev (режим розробки)</h3>

- робота через шаблонізатор html include
- конвертація шрифтів з .otf, .ttf в .woff і .woff2
- препроцесор scss, sourcemaps
- js webpack, sourcemaps
- створення svg спрайту
- browserSync

С<b>труктура каталогів</b>

src<br />
-- html<br />
-- index.html<br />
-- assets<br />
-------- fonts<br />
-------- img<br />
------------svg<br />
-------- js<br />
------------ modules<br />
------------ script.js<br />
-------- scss<br />
------------ style.scss<br />

<h3>build (режим продакшин)</h3>

- препроцесор scss, групування медіаправил, автопрефіксер, мініфікація
- js webpack, мініфікація
- оптимізація зображень, автоматичне створення webp зображень на основі існуючих
- створення svg спрайту

<b>Структура каталогів</b>

dist<br />
-- index.html<br />
-- assets<br />
-------- fonts<br />
-------- img<br />
------------ svg<br />
-------- js<br />
------------ modules<br />
------------ script.min.js<br />
-------- scss<br />
------------ style.min.css<br />

<h3>deploy (деплой на GitHub pages)</h3>

- запускає режим `dev`
- публікує каталог `dist` на GitHub `gh-pages` branch

<h3>reset</h3>

Примусова очистка каталогу `dist`
