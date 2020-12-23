const text = [
  '\nPlay my games!',
  '\nCheck out the downloads!',
  '\n..Find any secrets :)',
  '\nCheck out my YouTube and Github!',
];

let currentText = -1;


const textInterval = setInterval(() => {
  document.getElementById('textCarousel').innerHTML = text[(++currentText) % text.length];
}, 2000);
