import * as cheerio from 'cheerio';
import * as imageDownLoader from 'image-downloader';

fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((response) => {
    return response.text();
  })
  .then((html) => {
    //parse the html with cheerio
    let $ = cheerio.load(html);
    const imgsrc = $('img')
      .get()
      .map((item) => item.attribs.src)
      .slice(0, 10);
    console.log(imgsrc);

    let i = 0;
    for (const url of imgsrc) {
      console.log(url);

      i += 1;
      let filename = makeFileName(i);

      // console.log(filename);

      let dest = `./memes/${filename}`;
      // use a package to download and save the first 10 imgs with a new assined filename 01.jpg to 10.jpg
      const downloadImgAndSave = {
        url, // 'http://someurl.com/image.jpg'
        dest, // will be saved to /path/to/dest/image.jpg
      };
      console.log(dest);

      // download
      //   .image(downloadImgAndSave)
      //   .then(({ filename }) => {
      //     console.log('Saved to', filename); // saved to /path/to/dest/image.jpg
      //   })
      //   .catch((err) => console.error(err));
    }
  });

// // Below fetch returns html of the url Wohoo
// fetch(url).then((response) => console.log(response.text()));
// if (response.text()) console.log(response.text()).catch((e) => console.log(e));

// // next I want to get the first 1 img from above html
// const parsedhtml = cheerio.load(html);
// let imageSrc = $('id="images"').attr('src');
// console.log(imageSrc);

function makeFileName(i) {
  let filename;
  if (i < 10) {
    filename = '0' + i + '.jpg';
  } else if (i === 10) {
    filename = i + '.jpg';
  }
  return filename;
}

console.log(makeFileName(10));
