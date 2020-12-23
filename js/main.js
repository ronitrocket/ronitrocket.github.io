const text = [
  '\n\nPlay my games!',
  '\n\nCheck out the downloads!',
  '\n\n..Find any secrets :)',
  '\n\nCheck out my YouTube and Github!',
];

let currentText = -1;


const textInterval = setInterval(() => {
  document.getElementById('textCarousel').innerHTML = text[(++currentText) % text.length];
}, 5000);
