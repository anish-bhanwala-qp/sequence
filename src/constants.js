const RANK = Object.freeze({
  ACE: "ACE",
  TWO: "TWO",
  THREE: "THREE",
  FOUR: "FOUR",
  FIVE: "FIVE",
  SIX: "SIX",
  SEVEN: "SEVEN",
  EIGHT: "EIGHT",
  NINE: "NINE",
  TEN: "TEN",
  JACK: "JACK",
  QUEEN: "QUEEN",
  KING: "KING"
});

const SUIT = Object.freeze({
  SPADE: "SPADE",
  CLUB: "CLUB",
  DIAMOND: "DIAMOND",
  HEART: "HEART"
});

const GAME_CONFIG = Object.freeze({
  NUMBER_OF_CARDS_TWO_PLAYER: 7
});

const MOVE_TYPE = Object.freeze({
  PLACE_CHIP: "PLACE_CHIP",
  REPLACE_DEAD_CARD: "REPLACE_DEAD_CARD",
  REMOVE_CHIP: "REMOVE_CHIP"
});
