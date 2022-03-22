import ghpages from "gulp-gh-pages";

export const githubDeploy = async () => {
  app.gulp.src(`${app.path.buildFolder}/**/*.*`).pipe(ghpages());
};
