console.log('This is it!');

let htmlContent = fetch('https://memegen-link-examples-upleveled.netlify.app/')
  .then((response) => response.text())
  .then((data) => console.log(data));

// // Below fetch returns html of the url Wohoo
// fetch(url).then((response) => console.log(response.text()));
// if (response.text()) console.log(response.text()).catch((e) => console.log(e));

// // next I want to get the first 1 img from above html
