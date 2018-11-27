var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];

var getFlipped = document.getElementsByClassName('flipped');
var score = 0;
var scoreBoard = document.getElementById('score');
// var shuffleCard = function(array) {
//     var array = [];
//     while(cards.length !== 0) {
//         let randomIndex = Math.floor(Math.random() * cards.length);
//         array.push(cards[randomIndex]);
//         cards.slice(randomIndex, 1);
//     }
//     return array;
// }

function shuffle(cards) {
for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
}
};

var cardsInPlay = [];

var checkForMatch = function () {
	if (cardsInPlay.length === 2) {
		if (cardsInPlay[0] === cardsInPlay[1]) {
			document.getElementById('clickInfo').innerHTML = 'You found a match!';
            ++score;
            scoreBoard.innerHTML = "Score: " + score;
		} else {
			document.getElementById('clickInfo').innerHTML = 'Sorry, try again.';
		}
	}
}

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage);
    this.setAttribute('class', 'flipped');
	console.log('User flipped ' + cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
}

var createBoard = function () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
//     shuffleCard(cards);
}
// var resetting = function() {
//     window.location.reload();
// };
// document.getElementById('resetButton').addEventListener('click', resetting());
var reloading = function() {
    for (var i = 0; i < getFlipped.length; i++) {
        getFlipped[i].setAttribute('src', 'images/back.png');
    };
    cardsInPlay = [];
    shuffle(cards);
};
var resetButtonn = document.getElementById('resetButton');
resetButtonn.addEventListener('click', reloading);

 // jumbotronDisplayButton.onclick = function() {
 //   window.location.reload();
 // };
createBoard();