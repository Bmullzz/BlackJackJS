" use strict ";
/*jshint esversion: 6 */
var display = document.getElementById("display");
var diamonds = "\u2666]";
var clubs = "\u2663]";
var hearts = "\u2665]";
var spades = "\u2660]";

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
      return "[A";
    }
    else if (this.rank == 11){
      return "[J";
    }
    else if (this.rank == 12){
      return "[Q";
    }
    else if (this.rank == 13){
      return "[K";
    }
    else if (1 < this.rank < 11){
      return "[" + this.rank;
    }

  }

  getCardSuit() {
    if (this.suit === 1) {
      return diamonds; //Diamonds
    }
    else if (this.suit === 2) {
      return clubs; //clubs
    }
    else if (this.suit === 3) {
      return hearts; //hearts
    }
    else {
      return spades; //spades
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

  createNewDeck(){ //creates a large deck made of eight 52 card decks
    let deck = [];

    for (let i = 0; i <= 8; i++){
      for (let rank = 1; rank <= 13; rank++){
        for (let suit = 1; suit <= 4; suit++){
          deck.push(new Card(rank, suit));
        }
      }
    }

    return deck;
  }

  shuffleDeck(){
    for (let i = this.deck.length - 1; i >= 0; i--){
      let j = Math.floor(Math.random() * 10) + 1;
      let hold = this.deck[i];
      this.deck[i] = this.deck[j];
      this.deck[j] = hold;
    }

    //return this.deck.toString();
  }

  drawCard(){
    return this.deck.pop();
  }

  toString(){ //converts entire deck toString
    let result = "";

    for (let i = 0; i < this.deck.length; i++){
      result += this.deck[i].cardToString() + " ";
    }

    return result;
  }

}

class Dealer {

  constructor(){
    this.dealerHand = [];
  }

  dealerHand(){ //apparently this is not a function
    let newCard = freshDeck.drawCard();
    this.dealerHand.push(newCard);
  }

  dealerToString(){
    let result = "";

    for (let i = 0; i < this.dealerHand.length; i++){
      result += this.dealerHand[i].cardToString();
    }

    return result;
  }

}

class Player {

  playerHand(){}

}

function displayDeck(){
  var freshDeck = new Deck();
  //var dealer = new Dealer();
   //var dealHand = "This is the dealer's hand " + dealer.dealerHand() + "</br>";
  var displayDeck = "This is the new deck " + freshDeck.toString() + "</br>" + "</br>";
  freshDeck.shuffleDeck();
  var displayShuffledDeck = "This is the shuffled " + freshDeck.toString();

  display.innerHTML = displayDeck + displayShuffledDeck ;
}

function displayHands(){
  var newDeck = new Deck();
  var newHand = new Dealer();
  newHand.dealerHand();
  var displayDealerHand = "Dealer Hand: " + newHand.dealerToString();

}
