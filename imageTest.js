/**
 * Created by John on 1/28/14.
 */
// array containing the template orderly deck
var originalDeckBase = ["SA", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "SJ", "SQ", "SK", "DA", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "DJ", "DQ", "DK", "CA", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "CJ", "CQ", "CK", "HA", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10", "HJ", "HQ", "HK"];

//

function CardController($scope) {
    //array that holds the cards.
    $scope.card = ["SA", "S2", "S3", "S4", "S5", "S6", "S7", "S8", "S9", "S10", "SJ", "SQ", "SK", "DA", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "DJ", "DQ", "DK", "CA", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10", "CJ", "CQ", "CK", "HA", "H2", "H3", "H4", "H5", "H6", "H7", "H8", "H9", "H10", "HJ", "HQ", "HK"];
    //variable to control the index of the card array
    $scope.cardPick = 0;

    //The selection is the array element defined by cardPick.
    $scope.selection = $scope.card[$scope.cardPick];

    //updates the selection. Works with the watch immediately below
    var updateSelection = function(){
        $scope.selection = $scope.card[$scope.cardPick];
    } // end updateSelection function

    //This watches cardPick and calls updateSelection
    $scope.$watch('cardPick', updateSelection);

    //increment function
    $scope.incrementPick=function(){
        $scope.cardPick = $scope.cardPick + 1;
        $scope.selection = $scope.card[$scope.cardPick];
    }

    //decrement function
    $scope.decrementPick = function(){
        $scope.cardPick = $scope.cardPick - 1;
        $scope.selection = $scope.card[$scope.cardPick];
    }
};

