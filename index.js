import * as cheerio from 'cheerio';
import * as fs from 'fs';
import * as https from 'https';

const folderName = './memes';

//check if there is a directory 'memes' and remove it and its content
try {
  if (fs.existsSync(folderName)) {
    fs.rmdirSync(folderName, { recursive: true, force: true });
  }
} catch (err) {
  console.error(err);
}

//make a 'memes' directory
try {
  fs.mkdirSync(folderName);
} catch (err) {
  console.error(err);
}
console.log('Memes folder made');

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
    // console.log(imgsrc);

    let i = 0;
    for (const url of imgsrc) {
      // console.log(url);

      i += 1;
      let filename = makeFileName(i);
      // console.log(filename);

      let filepath = `./memes/${filename}`;
      // console.log(filepath);

      //download the images
      https.get(url, (res) => {
        const path = filepath;
        const writeStream = fs.createWriteStream(path);

        res.pipe(writeStream);

        writeStream.on('finish', () => {
          writeStream.close();
          console.log('Download Completed!');
        });
      });
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
// console.log(makeFileName(10));

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
