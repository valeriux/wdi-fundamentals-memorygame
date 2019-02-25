
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

//Creating an array 
var cardsInPlay = [];

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
//Function every time flipping the cards to back side front.
var flipCard = function (cardId)
{
  	cardsInPlay.push(cards[cardId].rank);
	if (cardsInPlay.length === 2)
	{
	checkForMatch();
	}
console.log("User flipped" + "" + cards[cardId].rank);
console.log("User flipped" + "" + cards[cardId].suit);
console.log("User flipped" + "" + cards[cardId].pathImage);
};



console.log(cardsInPlay.cardImage);
console.log(cardsInPlay.suit);

flipCard (0);
flipCard (1);





