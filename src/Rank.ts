const Rank = Object.freeze({
  ACE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  SIX: 6,
  SEVEN: 7,
  EIGHT: 8,
  NINE: 9,
  TEN: 10,
  JACK: 11,
  QUEEN: 12,
  KING: 13,
  text: function(val: number) {
    Rank.validate(val);
    if (val === Rank.ACE) {
      return "A";
    } else if (val === Rank.JACK) {
      return "J";
    } else if (val === Rank.QUEEN) {
      return "Q";
    } else if (val === Rank.KING) {
      return "K";
    } else {
      return val;
    }
  },
  validate: function(val: number) {
    if (val == null || val < 1 || val > 13) {
      throw Error(
        `Invalid rank value: ${val}. Must be number between 1 and 13.`
      );
    }
  }
});

export default Rank;
