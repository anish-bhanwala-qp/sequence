"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SMALL = Object.freeze({
    NUMBER_OF_CARDS_TWO_PLAYER: 7,
    CANVAS_WIDTH: 600,
    CANVAS_HEIGHT: 600,
    CARD_SIZE: 60,
    RANK_FONT_FAMILY: "22px Helvetica",
    RANK_X_OFFSET: 2,
    RANK_Y_OFFSET: 20,
    SUIT_FONT_FAMILY: "35px Helvetica",
    SUIT_X_OFFSET: 50,
    SUIT_Y_OFFSET: 36,
    SUIT_WIDTH: 15,
    SUIT_HEIGHT: 20,
    INDEX_FONT_FAMILY: "10px Helvetica",
    INDEX_X_OFFSET: 33,
    INDEX_Y_OFFSET: 15,
    TURN_INTERVAL: 900,
    CHIP_RADIUS: 12,
    PLAYER_CARDS_DIV_FONT_SIZE: "30px",
    PLAYER_CARDS_INDEX_FONT_SIZE: "10px",
    RESULT_DIV_FONT_SIZE: "50px"
});
var LARGE = Object.freeze({
    NUMBER_OF_CARDS_TWO_PLAYER: 7,
    CANVAS_WIDTH: 1200,
    CANVAS_HEIGHT: 1200,
    CARD_SIZE: 120,
    RANK_FONT_FAMILY: "45px Helvetica",
    RANK_X_OFFSET: 2,
    RANK_Y_OFFSET: 40,
    SUIT_FONT_FAMILY: "70px Helvetica",
    SUIT_X_OFFSET: 98,
    SUIT_Y_OFFSET: 77,
    SUIT_WIDTH: 30,
    SUIT_HEIGHT: 40,
    INDEX_FONT_FAMILY: "20px Helvetica",
    INDEX_X_OFFSET: 66,
    INDEX_Y_OFFSET: 20,
    TURN_INTERVAL: 900,
    CHIP_RADIUS: 24,
    PLAYER_CARDS_DIV_FONT_SIZE: "36px",
    PLAYER_CARDS_INDEX_FONT_SIZE: "30px",
    RESULT_DIV_FONT_SIZE: "50px"
});
var GAME_CONFIG = Object.freeze({
    get NUMBER_OF_CARDS_TWO_PLAYER() {
        return CURRENT_CONFIG["NUMBER_OF_CARDS_TWO_PLAYER"];
    },
    get CANVAS_WIDTH() {
        return CURRENT_CONFIG["CANVAS_WIDTH"];
    },
    get CANVAS_HEIGHT() {
        return CURRENT_CONFIG["CANVAS_HEIGHT"];
    },
    get CARD_SIZE() {
        return CURRENT_CONFIG["CARD_SIZE"];
    },
    get RANK_FONT_FAMILY() {
        return CURRENT_CONFIG["RANK_FONT_FAMILY"];
    },
    get RANK_X_OFFSET() {
        return CURRENT_CONFIG["RANK_X_OFFSET"];
    },
    get RANK_Y_OFFSET() {
        return CURRENT_CONFIG["RANK_Y_OFFSET"];
    },
    get SUIT_FONT_FAMILY() {
        return CURRENT_CONFIG["SUIT_FONT_FAMILY"];
    },
    get SUIT_X_OFFSET() {
        return CURRENT_CONFIG["SUIT_X_OFFSET"];
    },
    get SUIT_Y_OFFSET() {
        return CURRENT_CONFIG["SUIT_Y_OFFSET"];
    },
    get SUIT_WIDTH() {
        return CURRENT_CONFIG["SUIT_WIDTH"];
    },
    get SUIT_HEIGHT() {
        return CURRENT_CONFIG["SUIT_HEIGHT"];
    },
    get INDEX_FONT_FAMILY() {
        return CURRENT_CONFIG["INDEX_FONT_FAMILY"];
    },
    get INDEX_X_OFFSET() {
        return CURRENT_CONFIG["INDEX_X_OFFSET"];
    },
    get INDEX_Y_OFFSET() {
        return CURRENT_CONFIG["INDEX_Y_OFFSET"];
    },
    get TURN_INTERVAL() {
        return CURRENT_CONFIG["TURN_INTERVAL"];
    },
    get CHIP_RADIUS() {
        return CURRENT_CONFIG["CHIP_RADIUS"];
    },
    get PLAYER_CARDS_DIV_FONT_SIZE() {
        return CURRENT_CONFIG["PLAYER_CARDS_DIV_FONT_SIZE"];
    },
    get PLAYER_CARDS_INDEX_FONT_SIZE() {
        return CURRENT_CONFIG["PLAYER_CARDS_INDEX_FONT_SIZE"];
    },
    get RESULT_DIV_FONT_SIZE() {
        return CURRENT_CONFIG["RESULT_DIV_FONT_SIZE"];
    }
});
var CURRENT_CONFIG = LARGE;
function setupGameConfig(useSmall) {
    if (useSmall === void 0) { useSmall = false; }
    CURRENT_CONFIG = useSmall ? SMALL : LARGE;
}
exports.setupGameConfig = setupGameConfig;
exports.default = GAME_CONFIG;
//# sourceMappingURL=GAME_CONFIG.js.map