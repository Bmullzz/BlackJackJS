" use strict ";
/*jshint esversion: 6 */

describe("Card class", function () {
  let card = new Card(12, 2);

  it("getPointValue Test", function(){
    expect(card.getPointValue()).toEqual(10);
  });

  it("getCardNumber Test", function(){
    expect(card.getCardNumber()).toEqual("[Q");
  });

  it("getCardSuit Test", function(){
    expect(card.getCardSuit()).toEqual("\u2663]");
  });

  it("cardToString Test", function(){
    expect(card.cardToString()).toEqual("[Q" + "\u2663]");
  });

});

describe("Deck Class", function(){

  describe("createNewDeck function", function(){
    let deck = new Deck();
    let card1 = deck.drawCard();
    let card2 = deck.drawCard();
    let card3 = deck.drawCard();

    it("The 1st card should be King of Spades", function(){
      expect(card1.cardToString()).toEqual("[K" + "\u2660]");
    });

    it("The 2nd card should be King of hearts", function(){
      expect(card2.cardToString()).toEqual("[K" + "\u2665]");
    });

    it("The 3rd card should be King of Clubs", function(){
      expect(card3.cardToString()).toEqual("[K" + "\u2663]");
    });

  });




});
