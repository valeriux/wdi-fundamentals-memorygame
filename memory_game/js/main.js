//Card's array
var cards = 
[
	{
		rank: "Queen",
		suit: "Hearts",
		pathImage: "images/queen-of-hearts.png"
	},
	{
		rank: "Queen",
		suit: "Diamonds",
		pathImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "King",
		suit: "Hearts",
		pathImage: "images/king-of-hearts.png"
	},
	{
		rank: "King",
		suit: "Hearts",
		pathImage: "images/king-of-diamonds.png",
	}
];

var cardsInPlay = [];

//Function every time flipping the cards to back side front.
var flipCard = function ()
{
	var cardId = this.getAttribute('data-id');
	
	this.setAttribute('src',cards[cardId].pathImage);

  	cardsInPlay.push(cards[cardId].rank);
	
	if (cardsInPlay.length === 2)
	{
	checkForMatch();
	}
};


//To check when two card are selected and if they are matching.
var checkForMatch = function ()
{
	if (cardsInPlay[0] === cardsInPlay[1]) 
	{
	alert("You found a match!");
	} 
		else 
		{
		alert("Sorry, try again.");
		}
}




//Funtion to loads images in the board.
var createBoard = function ()
{
	for (var i=0; i < cards.length; i++)
	{
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src','images/back.png');
		cardElement.setAttribute('data-id',i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}

//Invoking createBoard function.
createBoard();

//Function Reset Game when the user do click.
function resetGame() {
	window.location.reload();
};




