" use strict ";

describe("Card class", function () {
  let card = new Card(12, 2);
  it("Card Test", function(){
    expect(card.getPointValue()).toEqual(10);
  });

});
