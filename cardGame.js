// Card Trick Program. Logic by Jim Schwegerl, code by John Allison




// trying to implement originalDeckBase as a controller so as to produce a model
function CardController($scope) {

    //variables

    //used for counting the number of cards in manual mode
    //$scope.deckCount = 0;
   
    //used for holding an orderly deck
    $scope.originalDeck = [];
    // array to contain shuffled deck
    $scope.shuffledDeck = [];

    // Stores the size of the cut deck
    $scope.cut = 0;
    // And as a string
    $scope.cutString = "";
    // The magic number:
    $scope.magicNumber = 0;

    //hidden and shown items
    $scope.deckRetryVis = false;
    $scope.btnDeckCheckVis = true;
    $scope.comp2LinkVis = false;

    //runs on load, executes Initialize
    var init = function(){
        $scope.deckRetryVis = false;
        $scope.btnDeckCheckVis = true;
        $scope.comp2LinkVis = false;
        $scope.DeckShuffle();
    };

    //functions

    /*
    // function to get the app set up
    $scope.Initialize = function(){
        $scope.deckRetryVis = false;
        $scope.btnDeckCheckVis = false;
        $scope.DeckShuffle();
    }
    */

    $scope.DeckCheck = function () {
        if ($scope.deckCount == 18) {
            alert("Stop! The next card you turn over will be your randomly chosen card.");
            //hides the button and shows the return link
            $scope.deckRetryVis = !$scope.deckRetryVis;
            $scope.btnDeckCheckVis = !$scope.btnDeckCheckVis;
        } // end if
        $scope.deckCount++;
    }; // end function

    // populates the shuffled deck with random cards
    $scope.DeckShuffle = function () {

        $scope.deckCount = 0; // resets the count.

        //empty the shuffled deck
        while ($scope.shuffledDeck.length > 0) {
            $scope.shuffledDeck.splice(0, 1);
        } // end while

        //populate the original deck
        for (var i = 0; i < 52; i++) {
            $scope.originalDeck[i] = $scope.originalDeckBase[i];
        } // end for

        // populates the shuffled deck.
        while ($scope.originalDeck.length > 0) {
            //pick a card, any card...
            var grab = Math.floor(Math.random() * $scope.originalDeck.length);
            //put the card in the shuffled deck
            $scope.shuffledDeck.push($scope.originalDeck[grab]);
            //remove it from the original
            $scope.originalDeck.splice(grab, 1);
        } //end while
        //sets comp2Link visible
        $scope.comp2LinkVis = !$scope.comp2LinkVis;
    }; // end function

    /*
    //cuts the deck.
    $scope.compDeckCut = function () {
        cut = Math.floor(Math.random() * (28 - 23 + 1) + 23);	//determines the random cut
        cutString = cut.toString(); // converts the cut number to a string
        // grabs each digit of the cut number and adds them
        magicNumber = parseInt(substr(cutString(0, 0))) + parseInt(substr(cutString(1, 1)));
        //inserts the paragraph containing the magicNumber
        $("#magic").text(function () {
            return "In this case, your magic card will be found " + magicNumber + " cards in.";
        });
        //alerts the user about the amount of the cut
        alert("The cut contains " + cut + " cards.");
        $("#btnComp3").show(); // reveals the link to proceed
    }; // end compDeckCut function
    */

    //runs the init function
    init();
} // end CardController





function cutNextCard() {
    var cutCard = 51 - cut;

}