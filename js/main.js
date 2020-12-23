var text = [
	'Play my games!',
	'Check out the downloads!',
	'..Find any secrets :)',
	'Check out my YouTube and Github!'
];

var currentText = -1;


var textInterval = setInterval(function() {
    document.getElementById('textCarousel').text = text[(++currentText) % text.length];
}, 2000);