import * as fs from 'node:fs';
import * as https from 'node:https';
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

const folderName = './memes';

// check if there is a directory 'memes' and remove it and its content
try {
  if (fs.existsSync(folderName)) {
    fs.rmSync(folderName, { recursive: true, force: true });
  }
} catch (err) {
  console.error(err);
}

// make a 'memes' directory
try {
  fs.mkdirSync(folderName);
} catch (err) {
  console.error(err);
}
console.log('Memes folder made');

function makeFileName(i) {
  let filename;
  if (i < 10) {
    filename = '0' + i + '.jpg';
  } else if (i === 10) {
    filename = i + '.jpg';
  }
  return filename;
}

fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((response) => {
    return response.text();
  })
  .then((html) => {
    // parse the html with cheerio
    const $ = cheerio.load(html);
    const imgsrc = $('img')
      .get()
      .map((item) => item.attribs.src)
      .slice(0, 10);

    let i = 0;
    for (const url of imgsrc) {
      i += 1;
      const filename = makeFileName(i);

      const filepath = `./memes/${filename}`;

      // download the images
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
  })
  .catch((err) => {
    console.log(err);
  });
