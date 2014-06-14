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
        //working variables
        this.cards = originalDeck;
        this.shuffled = [];
        this.shuffleDone = false;
        this.deckPosition = 0;
        this.deckButtonNum = 0;
        this.deckButtonDisable = false;
        this.page = 1;
        
        // function for the button where the user has their own deck
        this.deckButton = function() {
            this.deckButtonNum = this.deckButtonNum + 1;
            if(this.deckButtonNum == 18) {
                alert("Stop! The next card will be your card.")
            }
            if(this.deckButtonNum > 18) {
                this.deckButtonDisable = true;
            }
        }; // end function this.deckButton
        
        //populates and shuffles the shuffled array
        this.shuffle = function(){
            while (this.cards.length > 0){
                //pick a card, any card...
                var grab = Math.floor(Math.random() * this.cards.length);
                //put the card in the shuffled deck
                this.shuffled.push(this.cards[grab]);
                //remove the card from the original
                this.cards.splice(grab, 1);
            } // end while
            //enable the button to proceed
            this.shuffleDone = true;
        }; // end function this.shuffle
        
        //re-initializes the app
        //TODO: Make sure all applicable variables are included before announcing 1.0.
        this.reset = function() {
            this.cards = originalDeck;
            this.shuffled = [];
            this.shuffleDone = false;
            this.deckPosition = 0;
            this.deckButtonNum = 0;
            this.deckButtonDisable = false;
            this.page = 1;
        };
       
    }); // end of controller
    
    //array containing the deck of cards
    var originalDeck = [{
        id: 'SA',
        name: 'Ace of Spades',
        source: 'img/SA.jpg'
    }, {
        id: 'SK',
        name: 'King of Spades',
        source: 'img/SK.jpg'
    }, {
        id: 'SQ',
        name: 'Queen of Spades',
        source: 'img/SQ.jpg'
    }, {
        id: 'SJ',
        name: 'Jack of Spades',
        source: 'img/SJ.jpg'
    }, {
        id: 'S10',
        name: 'Ten of Spades',
        source: 'img/S10.jpg'
    }, {
        id: 'S9',
        name: 'Nine of Spades',
        source: 'img/S9.jpg'
    }, {
        id: 'S8',
        name: 'Eight of Spades',
        source: 'img/S8.jpg'
    }, {
        id: 'S7',
        name: 'Seven of Spades',
        source: 'img/S7.jpg'
    }, {
        id: 'S6',
        name: 'Six of Spades',
        source: 'img/S6.jpg'
    }, {
        id: 'S5',
        name: 'Five of Spades',
        source: 'img/S5.jpg'
    }, {
        id: 'S4',
        name: 'Four of Spades',
        source: 'img/S4.jpg'
    }, {
        id: 'S3',
        name: 'Trey of Spades',
        source: 'img/S3.jpg'
    }, {
        id: 'S2',
        name: 'Deuce of Spades',
        source: 'img/S2.jpg'
    }, {
        id: 'HA',
        name: 'Ace of Hearts',
        source: 'img/HA.jpg'
    }, {
        id: 'HK',
        name: 'King of Hearts',
        source: 'img/HK.jpg'
    }, {
        id: 'HQ',
        name: 'Queen of Hearts',
        source: 'img/HQ.jpg'
    }, {
        id: 'HJ',
        name: 'Jack of Hearts',
        source: 'img/HJ.jpg'
    }, {
        id: 'H10',
        name: 'Ten of Hearts',
        source: 'img/H10.jpg'
    }, {
        id: 'H9',
        name: 'Nine of Hearts',
        source: 'img/H9.jpg'
    }, {
        id: 'H8',
        name: 'Eight of Hearts',
        source: 'img/H8.jpg'
    }, {
        id: 'H7',
        name: 'Seven of Hearts',
        source: 'img/H7.jpg'
    }, {
        id: 'H6',
        name: 'Six of Hearts',
        source: 'img/H6.jpg'
    }, {
        id: 'H5',
        name: 'Five of Hearts',
        source: 'img/H5.jpg'
    }, {
        id: 'H4',
        name: 'Four of Hearts',
        source: 'img/H4.jpg'
    }, {
        id: 'H3',
        name: 'Trey of Hearts',
        source: 'img/H3.jpg'
    }, {
        id: 'H2',
        name: 'Deuce of Hearts',
        source: 'img/H2.jpg'
    }, {
        id: 'DA',
        name: 'Ace of Diamonds',
        source: 'img/DA.jpg'
    }, {
        id: 'DK',
        name: 'King of Diamonds',
        source: 'img/DK.jpg'
    }, {
        id: 'DQ',
        name: 'Queen of Diamonds',
        source: 'img/DQ.jpg'
    }, {
        id: 'DJ',
        name: 'Jack of Diamonds',
        source: 'img/DJ.jpg'
    }, {
        id: 'D10',
        name: 'Ten of Diamonds',
        source: 'img/D10.jpg'
    }, {
        id: 'D9',
        name: 'Nine of Diamonds',
        source: 'img/D9.jpg'
    }, {
        id: 'D8',
        name: 'Eight of Diamonds',
        source: 'img/D8.jpg'
    }, {
        id: 'D7',
        name: 'Seven of Diamonds',
        source: 'img/D7.jpg'
    }, {
        id: 'D6',
        name: 'Six of Diamonds',
        source: 'img/D6.jpg'
    }, {
        id: 'D5',
        name: 'Five of Diamonds',
        source: 'img/D5.jpg'
    }, {
        id: 'D4',
        name: 'Four of Diamonds',
        source: 'img/D4.jpg'
    }, {
        id: 'D3',
        name: 'Trey of Diamonds',
        source: 'img/D3.jpg'
    }, {
        id: 'D2',
        name: 'Deuce of Diamonds',
        source: 'img/D2.jpg'
    }, {
        id: 'CA',
        name: 'Ace of Clubs',
        source: 'img/CA.jpg'
    }, {
        id: 'CK',
        name: 'King of Clubs',
        source: 'img/CK.jpg'
    }, {
        id: 'CQ',
        name: 'Queen of Clubs',
        source: 'img/CQ.jpg'
    }, {
        id: 'CJ',
        name: 'Jack of Clubs',
        source: 'img/CJ.jpg'
    }, {
        id: 'C10',
        name: 'Ten of Clubs',
        source: 'img/C10.jpg'
    }, {
        id: 'C9',
        name: 'Nine of Clubs',
        source: 'img/C9.jpg'
    }, {
        id: 'C8',
        name: 'Eight of Clubs',
        source: 'img/C8.jpg'
    }, {
        id: 'C7',
        name: 'Seven of Clubs',
        source: 'img/C7.jpg'
    }, {
        id: 'C6',
        name: 'Six of Clubs',
        source: 'img/C6.jpg'
    }, {
        id: 'C5',
        name: 'Five of Clubs',
        source: 'img/C5.jpg'
    }, {
        id: 'C4',
        name: 'Four of Clubs',
        source: 'img/C4.jpg'
    }, {
        id: 'C3',
        name: 'Trey of Clubs',
        source: 'img/C3.jpg'
    }, {
        id: 'C2',
        name: 'Deuce of Clubs',
        source: 'img/C2.jpg'
    }];
})(); // end wrapper for var app