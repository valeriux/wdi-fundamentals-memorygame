
var cards = ["Queen", "Queen", "King", "King"];

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

	console.log("User flipped" + "" + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
};
flipCard (3);
flipCard (3);
checkForMatch();

;







