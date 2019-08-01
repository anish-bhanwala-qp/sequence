const Suit = Object.freeze({
  SPADE: 1,
  CLUB: 2,
  DIAMOND: 3,
  HEART: 4,
  text: function(val: number) {
    Suit.validate(val);

    switch (val) {
      case Suit.SPADE:
        return "Spade";
      case Suit.CLUB:
        return "Club";
      case Suit.DIAMOND:
        return "Diamond";
      case Suit.HEART:
        return "Heart";
    }
  },
  validate: function(val: number) {
    if (typeof val !== "number" || val < 1 || val > 4) {
      throw new Error(
        `Invalid suit value: ${val}. Must be number between 1 and 4.`
      );
    }
  }
});

export default Suit;
