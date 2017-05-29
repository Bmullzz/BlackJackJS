" use strict ";

class card {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  getValue(){
    if(this.rank < 11){
      return this.rank;
    }
    else if(this.rank < 14){
      return 10;
    }
    else return 1;
  }
}



// class player {
//
//   setHand(){}
//
//   getHand(){}
//
//   getHandValue(){}
//
// }
//
// class dealer {
//
// }
//
// class deck {
//
// }
//
// function shuffleDeck(){
//   var deck =
// }
//
// function dealTwoCards(){}
//
// function dealOneCard(){}
