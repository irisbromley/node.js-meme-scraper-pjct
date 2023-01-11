Create a cli (Command Line Interface) application that scrapes the **current version** of this website:

https://memegen-link-examples-upleveled.netlify.app/

...and saves the first 10 images into a folder called "memes" within the directory of the new project. The image files should be named with a number with a leading zero, eg. `01.jpg`, `02.jpg`, etc.

Avoid using an "image scraper" or "image downloader" library that does multiple steps at once for you (eg. do not use [`image-downloader`](https://www.npmjs.com/package/image-downloader) or [`nodejs-file-downloader`](https://www.npmjs.com/package/nodejs-file-downloader) or similar) - break the task down into smaller steps and select libraries as necessary for each step.

Make sure that the meme images are "ignored" in Git - they should not show up in your repository.

The program should be able to run multiple times without throwing an error.

## TODOs

- [ ] Create a readme
- [ ] Add `memes` to the `.gitignore`
- [ ] Set a variable with the URL to the website
- [ ] Request HTML information from the URL (maybe "fetch get request")
- [ ] Save this HTML into a variable called `htmlContent` (string)
- [ ] Inside `htmlContent`:
  - [ ] look for all matching elements (maybe an `<a>` element that contains an image or maybe an `<img />`)
  - [ ] extract the img `src` attribute (string)
  - [ ] assign this array of strings to a new variable called `imgSrcs` / `links` / `imageUrls`
- [ ] Filter the array to create a new array of only 10 elements
- [ ] Make a folder named `memes`
- [ ] Loop through each URL in the image urls and
  - [ ] Request image data (jpg data)
  - [ ] Save image data to a new file named `01.jpg`, `02.jpg`, etc in the memes folder
- [ ] Maybe at the beginning, before each of run of the program, we want to also clean the folder so that there are no conflicts?

Stretch goals:

- Make the application create your own custom meme (eg. `node index.js hello karl bender` would download an image with the top text of "hello", the bottom text of "karl", with the meme image of Bender)
- Add a nice progress indicator (either messages or a progress bar)

## Acceptance Criteria

- [ ] Preflight runs through without errors in your project
  - [ ] Link in your GitHub repo's About section: repl.it demo
- [ ] [Drone bot](https://learn.upleveled.io/courses/bootcamp-pern/modules/cheatsheet-tasks/#upleveled-drone) has been tagged and responded with a passing message
- [ ] Correct GitHub commit message format (see [Writing Commit Messages](https://learn.upleveled.io/courses/bootcamp-pern/modules/cheatsheet-git-github/#writing-commit-messages))
