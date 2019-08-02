const SMALL = Object.freeze({
  NUMBER_OF_CARDS_TWO_PLAYER: 7,
  CANVAS_WIDTH: 600,
  CANVAS_HEIGHT: 600,
  CARD_SIZE: 60,
  RANK_FONT_FAMILY: "25px Helvetica",
  RANK_X_OFFSET: 2,
  RANK_Y_OFFSET: 22,
  SUIT_FONT_FAMILY: "35px Helvetica",
  SUIT_X_OFFSET: 36,
  SUIT_Y_OFFSET: 58,
  INDEX_FONT_FAMILY: "10px Helvetica",
  INDEX_X_OFFSET: 33,
  INDEX_Y_OFFSET: 15,
  TURN_INTERVAL: 200,
  CHIP_RADIUS: 12,
  PLAYER_CARDS_DIV_FONT_SIZE: "18px",
  PLAYER_CARDS_INDEX_FONT_SIZE: "10px",
  RESULT_DIV_FONT_SIZE: "50px"
});

const LARGE = Object.freeze({
  NUMBER_OF_CARDS_TWO_PLAYER: 7,
  CANVAS_WIDTH: 1200,
  CANVAS_HEIGHT: 1200,
  CARD_SIZE: 120,
  RANK_FONT_FAMILY: "50px Helvetica",
  RANK_X_OFFSET: 2,
  RANK_Y_OFFSET: 44,
  SUIT_FONT_FAMILY: "70px Helvetica",
  SUIT_X_OFFSET: 72,
  SUIT_Y_OFFSET: 116,
  INDEX_FONT_FAMILY: "20px Helvetica",
  INDEX_X_OFFSET: 66,
  INDEX_Y_OFFSET: 20,
  TURN_INTERVAL: 200,
  CHIP_RADIUS: 24,
  PLAYER_CARDS_DIV_FONT_SIZE: "36px",
  PLAYER_CARDS_INDEX_FONT_SIZE: "20px",
  RESULT_DIV_FONT_SIZE: "50px"
});

let GAME_CONFIG = Object.freeze({
  get NUMBER_OF_CARDS_TWO_PLAYER(): number {
    return CURRENT_CONFIG["NUMBER_OF_CARDS_TWO_PLAYER"];
  },
  get CANVAS_WIDTH(): number {
    return CURRENT_CONFIG["CANVAS_WIDTH"];
  },
  get CANVAS_HEIGHT(): number {
    return CURRENT_CONFIG["CANVAS_HEIGHT"];
  },
  get CARD_SIZE(): number {
    return CURRENT_CONFIG["CARD_SIZE"];
  },
  get RANK_FONT_FAMILY(): string {
    return CURRENT_CONFIG["RANK_FONT_FAMILY"];
  },
  get RANK_X_OFFSET(): number {
    return CURRENT_CONFIG["RANK_X_OFFSET"];
  },
  get RANK_Y_OFFSET(): number {
    return CURRENT_CONFIG["RANK_Y_OFFSET"];
  },
  get SUIT_FONT_FAMILY(): string {
    return CURRENT_CONFIG["SUIT_FONT_FAMILY"];
  },
  get SUIT_X_OFFSET(): number {
    return CURRENT_CONFIG["SUIT_X_OFFSET"];
  },
  get SUIT_Y_OFFSET(): number {
    return CURRENT_CONFIG["SUIT_Y_OFFSET"];
  },
  get INDEX_FONT_FAMILY(): string {
    return CURRENT_CONFIG["INDEX_FONT_FAMILY"];
  },
  get INDEX_X_OFFSET(): number {
    return CURRENT_CONFIG["INDEX_X_OFFSET"];
  },
  get INDEX_Y_OFFSET(): number {
    return CURRENT_CONFIG["CANVAS_HEIGHT"];
  },
  get TURN_INTERVAL(): number {
    return CURRENT_CONFIG["INDEX_Y_OFFSET"];
  },
  get CHIP_RADIUS(): number {
    return CURRENT_CONFIG["CHIP_RADIUS"];
  },
  get PLAYER_CARDS_DIV_FONT_SIZE(): string {
    return CURRENT_CONFIG["PLAYER_CARDS_DIV_FONT_SIZE"];
  },
  get PLAYER_CARDS_INDEX_FONT_SIZE(): string {
    return CURRENT_CONFIG["PLAYER_CARDS_INDEX_FONT_SIZE"];
  },
  get RESULT_DIV_FONT_SIZE(): string {
    return CURRENT_CONFIG["RESULT_DIV_FONT_SIZE"];
  }
});

let CURRENT_CONFIG = LARGE;

export function setupGameConfig(useSmall = false) {
  CURRENT_CONFIG = useSmall ? SMALL : LARGE;
}

export default GAME_CONFIG;
