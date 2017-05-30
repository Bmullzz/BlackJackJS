" use strict ";
/*jshint esversion: 6 */
var display = document.getElementById("display");

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
    if (this.rank == 1){
      return "A";
    }
    else if (this.rank == 11){
      return "J";
    }
    else if (this.rank == 12){
      return "Q";
    }
    else if (this.rank == 13){
      return "K";
    }
    else if (1 < this.rank < 11){
      return this.rank;
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

  cardToString(){
    return this.getCardNumber() + "" + this.getCardSuit();
  }

}

class Deck {

  constructor(){
    this.deck = this.createNewDeck();
  }

  createNewDeck(){
    let deck = [];

    for (let rank = 1; rank <= 13; rank++){
      for (let suit = 1; suit <= 4; suit++){
        deck.push(new Card(rank, suit));
      }
    }

    return deck;
  }

  shuffleDeck(){
    for (let i = this.deck.length - 1; i > 0; i--){
      let j = Math.floor(Math.random() * i) + 1;
      let hold = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = hold;
    }

    //return this.deck.toString();
  }

  toString(){
    let result = "";

    for (let i = 0; i < this.deck.length; i++){
      result += "[" + this.deck[i].cardToString() + "]" + " ";
    }

    return result;
  }

}

class Dealer {
  

}

class Player {

}

function displayDeck(){
  var freshDeck = new Deck();
  var displayDeck = "This is the new deck " + freshDeck.toString() + "</br>" + "</br>";
  freshDeck.shuffleDeck();
  var displayShuffledDeck = "This is the shuffled " + freshDeck.toString();

  display.innerHTML = displayDeck + displayShuffledDeck ;
}

// this.init = function(){
//
//   displayDeck();
// }
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
