describe("wordOrder", function() {
  it("returns one unique word in a list", function() {
    expect(wordOrder("cat")).to.eql(["cat"]);
  });

  it("returns each unique word in a list", function() {
    expect(wordOrder("cat, dog")).to.eql(["cat", "dog"]);
  });

  it("returns each unique word only once", function() {
    expect(wordOrder("cat, dog, cat")).to.eql(["cat", "dog"]);
  });

  it("Returns the most frequently appearing word first", function() {
    expect(wordOrder("cat, dog, dog")).to.equal(["dog", "cat"])
  });
});

describe("occurance", function() {
  it("Keeps track of how many times a word appears", function() {
    expect(occurance(["dog", "dog", "cat"])).to.eql([2, 1])
  });
});
