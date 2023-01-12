import * as cheerio from 'cheerio';
import * as imageDownLoader from 'node-image-downloader';

fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((response) => {
    return response.text();
  })
  .then((html) => {
    //parse the html with cheerio
    let $ = cheerio.load(html);
    const imgsrc = $('img').attr('src');
    //download the image with node-image-downloader
    // imageDownLoader({
    //   imgs: [
    //     {
    //       uri: imgsrc,
    //     },
    //   ],
    //   dest: './memes',
    // });
    console.log(imgsrc);
  });

// // Below fetch returns html of the url Wohoo
// fetch(url).then((response) => console.log(response.text()));
// if (response.text()) console.log(response.text()).catch((e) => console.log(e));

// // next I want to get the first 1 img from above html
// const parsedhtml = cheerio.load(html);
// let imageSrc = $('id="images"').attr('src');
// console.log(imageSrc);
