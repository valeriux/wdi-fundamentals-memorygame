
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

var checkForMatch = function ()
{
	if (cardsInPlay[0] === cardsInPlay[1]) 
	{
	console.log("You found a match!");
	} 
		else 
		{
		console.log("Sorry, try again.");
		}
}

var flipCard = function (cardId)
{
	if (cardsInPlay.length === 2)
	{
		if (cardsInPlay[0] === cardsInPlay[1])
		{
		alert ("You found a match!.")
		}
			else 
			{
			alert ("Sorry, try again.")
		}
	}

	console.log("User flipped" + "" + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
};

flipCard (3);
flipCard (1);
checkForMatch();

console.log(cardsInPlay.cardImage);
console.log(cardsInPlay.suit);




