const text = [
  'Play my games!',
  'Check out the downloads!',
  '..Find any secrets :)',
  'Check out my YouTube and Github!',
];

let currentText = -1;


const textInterval = setInterval(() => {
  document.getElementById('textCarousel').text = text[(++currentText) % text.length];
}, 2000);
