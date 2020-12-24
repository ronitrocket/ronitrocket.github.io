function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
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
        const string = "";
        for (x = 0; x < text[i].length; x++) {
            string = string + charAt(text[i].charAt(x));
            document.getElementById('textCarousel').innerHTML = string;
            sleep(100);
        }
        sleep(4000);
        for (y = 0; y < text[i].length; y++) {
            string = string.substring(0, string.length - 1);
            document.getElementById('textCarousel').innerHTML = string;
            sleep(100);
        }
    }
}


