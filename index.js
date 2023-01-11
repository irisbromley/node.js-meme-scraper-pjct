console.log('This is it!');

let url = 'https://memegen-link-examples-upleveled.netlify.app/';
console.log(url);



// Below fetch returns html of the url Wohoo
fetch(url)
  .then((response) => response.text())
  .then((cabbage) => console.log(cabbage))
  .catch((e) => console.log(e));
// next I want to get the first 10 img from above html
