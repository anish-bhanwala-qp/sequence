import DrawSuit from "./DrawSuit";

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
  getDrawFunction: function(
    val: number
  ): (
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
    width: number,
    height: number
  ) => void {
    Suit.validate(val);

    switch (val) {
      case Suit.SPADE:
        return DrawSuit.drawSpade;
      case Suit.CLUB:
        return DrawSuit.drawClub;
      case Suit.DIAMOND:
        return DrawSuit.drawDiamond;
      case Suit.HEART:
        return DrawSuit.drawHeart;
      default:
        throw Error(`Invalid suit value: ${val}`);
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
