// Card Trick Program. Logic by Jim Schwegerl, code by John Allison

// array containing orderly deck
var originalDeck = [];

// array containing the template orderly deck
var originalDeckBase = ["SA", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "SJ", "SQ", "SK", "DA", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "DJ", "DQ", "DK", "CA", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "CJ", "CQ", "CK", "HA", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10", "HJ", "HQ", "HK"];

// trying to implement originalDeckBase as a controller so as to produce a model
var CardController;
CardController = function ($scope) {
    for (var i = 0; i < originalDeckBase.length; i++) {
        $scope.card = {};
        $scope.push(originalDeckBase[i]);
    }
};

// array to contain shuffled deck
var shuffledDeck = [];

// Stores the size of the cut deck
var cut = 0;
// And as a string
var cutString;
// The magic number:
var magicNumber;

// deck count. Initial valude is zero
var deckCount = 0;

var compCardPick = 0;

// populates the shuffled deck with random cards
function DeckShuffle(){
	
	deckCount = 0; // resets the count.
	
	//empty the shuffled deck
	while ($(shuffledDeck).length > 0){
		shuffledDeck.splice(0,1);
	} // end while
	
	//populate the original deck
	for (i = 0; i < 52; i++){
	originalDeck[i] = originalDeckBase[i];	
	} // end for
	
	// populates the shuffled deck.
	while ($(originalDeck).length > 0)
	{
		//pick a card, any card...
		var grab = Math.floor(Math.random() * $(originalDeck).length);
		//put the card in the shuffled deck
		shuffledDeck.push(originalDeck[grab]);
		//remove it from the original
		originalDeck.splice(grab,1);
	} //end while
	$("#comp2link").show();
} // end function

function ManualShuffle(){
	DeckShuffle(); // calls the deck shuffling function
	$(".shuffleNext").show();
} // end function

function DeckCheck(){
	showTheCard(deckCount);
	if (deckCount == 18){
		alert("Stop! The next card you turn over will be your randomly chosen card.");
		$(".btnDeckCheck").hide();
		$(".return").show();
		} // end if
		deckCount++;
} // end function

function compDeckCut(){
cut = $("#slider").slider('value');	//gets the slider value
cutString = cut.toString(); // converts the cut number to a string
// grabs each digit of the cut number and adds them
magicNumber = parseInt(substr(cutString(0,0))) + parseInt(substr(cutString(1,1))); 
//inserts the paragraph containing the magicNumber
$("#magic").text(function() {
	return "In this case, your magic card will be found " + magicNumber + " cards in.";
});
//alerts the user about the amount of the cut
alert("The cut contains " + cut + " cards.");
$("#btnComp3").show(); // reveals the link to proceed
}

//function for displaying cards
function showTheCard(number){
	$(".theCards").hide();
	switch(shuffledDeck[number]){
		case "CA":
		{
			$(".cardCA").show();
		}
		case "C2":
		{
			$(".cardC2").show();
		}
		case "C3":
		{
			$(".cardC3").show();
		}
		case "C4":
		{
			$(".cardC4").show();
		}
		case "C5":
		{
			$(".cardC5").show();
		}
		case "C6":
		{
			$(".cardC7").show();
		}
		case "C7":
		{
			$(".cardC7").show();
		}
		case "C8":
		{
			$(".cardC8").show();
		}
		case "C9":
		{
			$(".cardC9").show();
		}
		case "C10":
		{
			$(".cardC10").show();
		}
		case "CJ":
		{
			$(".cardCJ").show();
		}
		case "CQ":
		{
			$(".cardCQ").show();
		}
		case "CK":
		{
			$(".cardCK").show();
		}
		case "DA":
		{
			$(".cardDA").show();
		}
		case "D2":
		{
			$(".cardD2").show();
		}
		case "D3":
		{
			$(".cardD3").show();
		}
		case "D4":
		{
			$(".cardD4").show();
		}
		case "D5":
		{
			$(".cardD5").show();
		}
		case "D6":
		{
			$(".cardD7").show();
		}
		case "D7":
		{
			$(".cardD7").show();
		}
		case "D8":
		{
			$(".cardD8").show();
		}
		case "D9":
		{
			$(".cardD8").show();
		}
		case "D10":
		{
			$(".cardD10").show();
		}
		case "DJ":
		{
			$(".cardDJ").show();
		}
		case "DQ":
		{
			$(".cardDQ").show();
		}
		case "DK":
		{
			$(".cardDK").show();
		}
		case "HA":
		{
			$(".cardHA").show();
		}
		case "H2":
		{
			$(".cardH2").show();
		}
		case "H3":
		{
			$(".cardH3").show();
		}
		case "H4":
		{
			$(".cardH4").show();
		}
		case "H5":
		{
			$(".cardH5").show();
		}
		case "H6":
		{
			$(".cardH7").show();
		}
		case "H7":
		{
			$(".cardH7").show();
		}
		case "H8":
		{
			$(".cardH8").show();
		}
		case "H9":
		{
			$(".cardH8").show();
		}
		case "H10":
		{
			$(".cardH10").show();
		}
		case "HJ":
		{
			$(".cardHJ").show();
		}
		case "HQ":
		{
			$(".cardHQ").show();
		}
		case "HK":
		{
			$(".cardHK").show();
		}
		case "SA":
		{
			$(".cardSA").show();
		}
		case "S2":
		{
			$(".cardS2").show();
		}
		case "S3":
		{
			$(".cardS3").show();
		}
		case "S4":
		{
			$(".cardS4").show();
		}
		case "S5":
		{
			$(".cardS5").show();
		}
		case "S6":
		{
			$(".cardS7").show();
		}
		case "S7":
		{
			$(".cardS7").show();
		}
		case "S8":
		{
			$(".cardS8").show();
		}
		case "S9":
		{
			$(".cardS8").show();
		}
		case "S10":
		{
			$(".cardS10").show();
		}
		case "SJ":
		{
			$(".cardSJ").show();
		}
		case "SQ":
		{
			$(".cardSQ").show();
		}
		case "SK":
		{
			$(".cardSK").show();
		}
		default:
		{
			alert("Something has gone really wrong here. Please notify Jim or John");
		}

	} // end switch
} // end function

function cutNextCard(){
var cutCard = 51 - cut;
	
}