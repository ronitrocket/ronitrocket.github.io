function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


const text = [
    '\n\n\nPlay my games!',
    '\n\n\nCheck out the downloads!',
    '\n\n\n..Find any secrets :)',
    '\n\n\nCheck out my YouTube and Github!',
];

let currentText = -1;

for (;;) {
    for (i = 0; i < text.length; i++) {
        let string = "";
        for (x = 0; x < text[i].length; x++) {
            string = string + text[i].charAt(x);
            document.getElementById('textCarousel').textContent = string;
            sleep(100);
        }
        sleep(4000);
        for (y = 0; y < text[i].length; y++) {
            string = string.substring(0, string.length - 1);
            document.getElementById('textCarousel').textContent = string;
            sleep(100);
        }
    }
}


