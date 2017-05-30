" use strict ";
/*jshint esversion: 6 */

describe("Card class", function () {
  let card = new Card(12, 2);

  it("getPointValue Test", function(){
    expect(card.getPointValue()).toEqual(10);
  });

  it("getCardNumber Test", function(){
    expect(card.getCardNumber()).toEqual("Q");
  });

  it("getCardSuit Test", function(){
    expect(card.getCardSuit()).toEqual("\u2663");
  });

  it("cardToString Test", function(){
    expect(card.cardToString()).toEqual("Q" + "\u2663");
  });

});

describe("Deck Class", function(){

  describe("createNewDeck function", function(){
    let deck = new Deck();
    


  })
  let deck1 = new Deck();
  let deck2 = new Deck();

  it("createNewDeck Test", function(){
    expect(deck.createNewDeck()).toEqual(10);
  });

});
