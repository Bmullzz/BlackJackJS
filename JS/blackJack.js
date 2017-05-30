" use strict ";
/*jshint esversion: 6 */

class Card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  getPointValue(){
    if(this.rank <= 10){ //number cards
      return this.rank;
    }
    else if(this.rank <= 13){ //face cards
      return 10;
    }
    else return 1; //ace maybe modify
  }

  getCardNumber(){
    if (1 < this.rank <= 10){
      return this.rank;
    }
    else if (this.rank === 11){
      return "J";
    }
    else if (this.rank === 12){
      return "Q";
    }
    else if (this.rank === 13){
      return "K";
    }
    else{
       return "A";
    }
  }

  getCardSuit() {
    if (this.suit === 1) {
      return "\u2666"; //Diamond
    }
    else if (this.suit === 2) {
      return "\u2663"; //clubs
    }
    else if (this.suit === 3) {
      return "\u2665"; //hearts
    }
    else {
      return "\u2660"; //spades
    }
  }

}

class Deck {

  constructor(){
    this.deck = this.createNewDeck();
  }

  createNewDeck(){
    var deck = [];

    for (var rank = 1; rank <= 13; rank++){
      for (var suit = 1; suit <= 4; suit++){
        deck.push(new Card(rank, suit));
      }
    }

    return deck;
  }

  shuffleDeck(){
    for (var i = 1; i < this.deck.length; i++){
      var j = Math.floor(Math.random() * ) + 1
    }
  }

}
//
// class Player {
//
//   setHand(){}
//
//   getHand(){}
//
//   getHandValue(){}
//
// }
//
// class Dealer {
//
// }



// function shuffleDeck(){
//
// }
//
// function dealTwoCards(){}
//
// function dealOneCard(){}
