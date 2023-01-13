import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as client from 'https';

// use the built in

const folderName = './memes';
//check if there is a folder called memes and if not make one
try {
  if (!fs.existsSync(folderName)) {
    fs.mkdirSync(folderName);
  }
} catch (err) {
  console.error(err);
}

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
      console.log(filename);

      let filepath = `./memes/${filename}`;
      console.log(filepath);
    }
  });

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

//use native code to download the images
// function downloadImage(url, filepath) {
//   return new Promise((resolve, reject) => {
//     client.get(url, (res) => {
//       if (res.statusCode === 200) {
//         res
//           .pipe(fs.createWriteStream(filepath))
//           .on('error', reject)
//           .once('close', () => resolve(filepath));
//       } else {
//         // Consume response data to free up memory
//         res.resume();
//         reject(
//           new Error(`Request Failed With a Status Code: ${res.statusCode}`),
//         );
//       }
//     });
//   });
// }
// console.log(downloadImage());
