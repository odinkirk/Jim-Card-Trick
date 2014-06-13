/**
* Created with Jim-Card-Trick.
* User: odinkirk
* Date: 2014-06-13
* Time: 12:01 AM
* To change this template use Tools | Templates.
*/
(function() {
    var app = angular.module('magic', []);
    app.controller('TrickController', function() {
        this.cards = originalDeck;
        this.page = 1;
        
        //TODO: Add reset function. Reset function should
        //blank all deck values and set page to 1.
    });
    
    var originalDeck = [{
        id: 'SA',
        name: 'Ace of Spades',
        source: 'img/SA.jpg'
    }, {
        id: 'SK',
        name: 'King of Spades',
        source: 'img/SK.jpg'
    }];
})(); // end wrapper for var app