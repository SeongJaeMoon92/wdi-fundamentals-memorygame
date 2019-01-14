//console.log("Up and running!");

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
var cardsInPlay = [];

var checkForMatch = function() {
	// if (cardsInPlay[0] === cardsInPlay[1]) {
	// console.log("You found a match!");
	// 	} else {
	// console.log("Sorry, try again.");
	//}
	if (cardsInPlay[0] === cardsInPlay[1]){
			alert("You found a match!")
		} else {
			alert("Sorry, try again.")
		}
}

var flipCard = function (cardId) {

	checkForMatch();

	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);

	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	if (cardsInPlay.length === 2) {
		checkForMatch();
	}
}

flipCard(0);
flipCard(2);


// Next update the cards[cardId] portion of cardsInPlay.push(cards[cardId]);. 
// You'll want to push the name of the card ("queen" or "king") to the cardsInPlay array.
// HINT: You'll want to use the rank property like we did in the last step.

// Now let's add a bit of new code so that we can "see" the cards that are flipped in our console. 
// Add two console.log() statements. One should log the cardImage and the other should log the suit for the flipped card.

// Save your main.js file, open the project in Chrome and open the console. Make sure that the "User flipped queen" 
// and "User flipped king" messages are still displayed. You should now also see the image paths and suits displayed.




