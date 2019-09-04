"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Card_1 = __importDefault(require("./Card"));
var Rank_1 = __importDefault(require("./Rank"));
var Suit_1 = __importDefault(require("./Suit"));
var Deck_1 = __importDefault(require("./Deck"));
var Position_1 = __importDefault(require("./Position"));
var GAME_CONFIG_1 = __importDefault(require("./GAME_CONFIG"));
var Slot_1 = __importDefault(require("./Slot"));
var Board = /** @class */ (function () {
    function Board() {
        this.slots = [
            [
                new Slot_1.default(true),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.TWO, Suit_1.default.SPADE)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.THREE, Suit_1.default.SPADE)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.FOUR, Suit_1.default.SPADE)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.FIVE, Suit_1.default.SPADE)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.SIX, Suit_1.default.SPADE)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.SEVEN, Suit_1.default.SPADE)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.EIGHT, Suit_1.default.SPADE)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.NINE, Suit_1.default.SPADE)),
                new Slot_1.default(true)
            ],
            [
                new Slot_1.default(false, new Card_1.default(Rank_1.default.SIX, Suit_1.default.CLUB)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.FIVE, Suit_1.default.CLUB)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.FOUR, Suit_1.default.CLUB)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.THREE, Suit_1.default.CLUB)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.TWO, Suit_1.default.CLUB)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.ACE, Suit_1.default.HEART)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.KING, Suit_1.default.HEART)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.QUEEN, Suit_1.default.HEART)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.TEN, Suit_1.default.HEART)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.TEN, Suit_1.default.SPADE))
            ],
            [
                new Slot_1.default(false, new Card_1.default(Rank_1.default.SEVEN, Suit_1.default.CLUB)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.ACE, Suit_1.default.SPADE)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.TWO, Suit_1.default.DIAMOND)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.THREE, Suit_1.default.DIAMOND)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.FOUR, Suit_1.default.DIAMOND)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.FIVE, Suit_1.default.DIAMOND)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.SIX, Suit_1.default.DIAMOND)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.SEVEN, Suit_1.default.DIAMOND)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.NINE, Suit_1.default.HEART)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.QUEEN, Suit_1.default.SPADE))
            ],
            [
                new Slot_1.default(false, new Card_1.default(Rank_1.default.EIGHT, Suit_1.default.CLUB)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.KING, Suit_1.default.SPADE)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.SIX, Suit_1.default.CLUB)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.FIVE, Suit_1.default.CLUB)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.FOUR, Suit_1.default.CLUB)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.THREE, Suit_1.default.CLUB)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.TWO, Suit_1.default.CLUB)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.EIGHT, Suit_1.default.DIAMOND)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.EIGHT, Suit_1.default.HEART)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.KING, Suit_1.default.SPADE))
            ],
            [
                new Slot_1.default(false, new Card_1.default(Rank_1.default.NINE, Suit_1.default.CLUB)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.QUEEN, Suit_1.default.SPADE)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.SEVEN, Suit_1.default.CLUB)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.SIX, Suit_1.default.HEART)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.FIVE, Suit_1.default.HEART)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.FOUR, Suit_1.default.HEART)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.ACE, Suit_1.default.HEART)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.NINE, Suit_1.default.DIAMOND)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.SEVEN, Suit_1.default.HEART)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.ACE, Suit_1.default.SPADE))
            ],
            [
                new Slot_1.default(false, new Card_1.default(Rank_1.default.TEN, Suit_1.default.CLUB)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.TEN, Suit_1.default.SPADE)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.EIGHT, Suit_1.default.CLUB)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.SEVEN, Suit_1.default.HEART)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.TWO, Suit_1.default.HEART)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.THREE, Suit_1.default.HEART)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.KING, Suit_1.default.HEART)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.TEN, Suit_1.default.DIAMOND)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.SIX, Suit_1.default.HEART)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.TWO, Suit_1.default.DIAMOND))
            ],
            [
                new Slot_1.default(false, new Card_1.default(Rank_1.default.QUEEN, Suit_1.default.CLUB)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.NINE, Suit_1.default.SPADE)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.NINE, Suit_1.default.CLUB)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.EIGHT, Suit_1.default.HEART)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.NINE, Suit_1.default.HEART)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.TEN, Suit_1.default.HEART)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.QUEEN, Suit_1.default.HEART)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.QUEEN, Suit_1.default.DIAMOND)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.FIVE, Suit_1.default.HEART)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.THREE, Suit_1.default.DIAMOND))
            ],
            [
                new Slot_1.default(false, new Card_1.default(Rank_1.default.KING, Suit_1.default.CLUB)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.EIGHT, Suit_1.default.SPADE)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.TEN, Suit_1.default.CLUB)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.QUEEN, Suit_1.default.CLUB)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.KING, Suit_1.default.CLUB)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.ACE, Suit_1.default.CLUB)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.ACE, Suit_1.default.DIAMOND)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.KING, Suit_1.default.DIAMOND)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.FOUR, Suit_1.default.HEART)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.FOUR, Suit_1.default.DIAMOND))
            ],
            [
                new Slot_1.default(false, new Card_1.default(Rank_1.default.ACE, Suit_1.default.CLUB)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.SEVEN, Suit_1.default.SPADE)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.SIX, Suit_1.default.SPADE)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.FIVE, Suit_1.default.SPADE)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.FOUR, Suit_1.default.SPADE)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.THREE, Suit_1.default.SPADE)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.TWO, Suit_1.default.SPADE)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.TWO, Suit_1.default.HEART)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.THREE, Suit_1.default.HEART)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.FIVE, Suit_1.default.DIAMOND))
            ],
            [
                new Slot_1.default(true),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.ACE, Suit_1.default.DIAMOND)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.KING, Suit_1.default.DIAMOND)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.QUEEN, Suit_1.default.DIAMOND)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.TEN, Suit_1.default.DIAMOND)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.NINE, Suit_1.default.DIAMOND)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.EIGHT, Suit_1.default.DIAMOND)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.SEVEN, Suit_1.default.DIAMOND)),
                new Slot_1.default(false, new Card_1.default(Rank_1.default.SIX, Suit_1.default.DIAMOND)),
                new Slot_1.default(true)
            ]
        ];
    }
    Board.prototype.removeChip = function (position) {
        var slot = this.slots[position.row][position.col];
        if (slot.chip == null) {
            throw Error("There is no chip to be removed at position: " + position.toString());
        }
        slot.removeChip();
    };
    Board.prototype.placeChip = function (chip, card, position) {
        this.validateChipCanBePlaced(card, position);
        this.slots[position.row][position.col].placeChip(chip);
    };
    Board.prototype.validateChipCanBePlaced = function (playerCard, position) {
        var row = position.row, col = position.col;
        var slot = this.slots[row][col];
        if (slot.chip != null) {
            throw Error("Chip already placed at position: " + position.toString());
        }
        // check if its a corner
        if (slot.isCorner) {
            throw Error("Card cannot be placed at four corners");
        }
        // Either the card should match or it should be two eyed jack
        if (slot.card != null &&
            (playerCard.isTwoEyedJack() || playerCard.matches(slot.card))) {
            return;
        }
        console.log(slot);
        throw Error("Card at: " + row + ", " + col + " in deck is: " + (slot.card == null ? "corner" : slot.card.toString()) + ", and player's card is " + playerCard.toString());
    };
    Board.prototype.verifyBoard = function () {
        var deck = new Deck_1.default();
        for (var row = 0; row < this.slots.length; row = row + 1) {
            var slotsRow = this.slots[row];
            for (var col = 0; col < slotsRow.length; col = col + 1) {
                var slot = slotsRow[col];
                if (slot.isCorner) {
                    continue;
                }
                for (var i = 0; i < deck.cards.length; i++) {
                    var deckCard = deck.cards[i];
                    if (slot.isEmptySlot() && slot.hasMatchingCard(deckCard)) {
                        deck.cards.splice(i, 1);
                        break;
                    }
                }
            }
        }
        console.log(deck);
    };
    Board.prototype.displayBoard = function (ctx) {
        ctx.clearRect(0, 0, GAME_CONFIG_1.default.CANVAS_WIDTH, GAME_CONFIG_1.default.CANVAS_HEIGHT);
        for (var row = 0; row < this.slots.length; row = row + 1) {
            var slotsRow = this.slots[row];
            for (var col = 0; col < slotsRow.length; col = col + 1) {
                var slot = slotsRow[col];
                var position = new Position_1.default(row, col);
                if (slot.isCorner) {
                    this.drawCorner(ctx, position);
                }
                else if (slot.chip != null) {
                    this.drawChip(ctx, slot, position);
                }
                else if (slot.isEmptySlot()) {
                    this.drawCard(ctx, slot, position);
                }
                else {
                    throw Error("Invalid board element: " + slot);
                }
            }
        }
    };
    Board.prototype.drawCorner = function (ctx, position) {
        this.drawBorderedRect(ctx, position, "#eee");
        var radius = GAME_CONFIG_1.default.CHIP_RADIUS;
        var halfWidth = GAME_CONFIG_1.default.CARD_SIZE / 2;
        var y = position.row * GAME_CONFIG_1.default.CARD_SIZE + halfWidth;
        var x = position.col * GAME_CONFIG_1.default.CARD_SIZE + halfWidth;
        ctx.fillStyle = "#000";
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        ctx.fill();
    };
    Board.prototype.drawChip = function (ctx, slot, position) {
        if (slot.card == null || slot.chip == null) {
            throw Error("Chip should be present at the slot: " + position.toString());
        }
        this.drawCard(ctx, slot, position);
        var halfWidth = GAME_CONFIG_1.default.CARD_SIZE / 2;
        var y = position.row * GAME_CONFIG_1.default.CARD_SIZE + halfWidth;
        var x = position.col * GAME_CONFIG_1.default.CARD_SIZE + halfWidth;
        if (slot.chip.isInSequence()) {
            ctx.fillStyle = "#000";
            ctx.beginPath();
            ctx.arc(x, y, GAME_CONFIG_1.default.CHIP_RADIUS, 0, 2 * Math.PI, false);
            ctx.fill();
        }
        ctx.fillStyle = slot.chip.color;
        ctx.beginPath();
        var radius = slot.chip.isInSequence()
            ? GAME_CONFIG_1.default.CHIP_RADIUS / 2
            : GAME_CONFIG_1.default.CHIP_RADIUS;
        ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
        ctx.fill();
    };
    Board.prototype.drawCard = function (ctx, slot, position) {
        if (slot.card == null) {
            throw Error("Card should be present at slot: " + position.toString());
        }
        var card = slot.card;
        var x = position.col * GAME_CONFIG_1.default.CARD_SIZE;
        var y = position.row * GAME_CONFIG_1.default.CARD_SIZE;
        ctx.fillStyle = "#000";
        ctx.rect(x, y, GAME_CONFIG_1.default.CARD_SIZE, GAME_CONFIG_1.default.CARD_SIZE);
        ctx.stroke();
        ctx.fillStyle = "#000";
        ctx.font = GAME_CONFIG_1.default.RANK_FONT_FAMILY;
        var rankX = x + GAME_CONFIG_1.default.RANK_X_OFFSET;
        var rankY = y + GAME_CONFIG_1.default.RANK_Y_OFFSET;
        ctx.fillText("" + card.rankDisplay(), rankX, rankY);
        ctx.font = GAME_CONFIG_1.default.INDEX_FONT_FAMILY;
        var indexX = x + GAME_CONFIG_1.default.INDEX_X_OFFSET;
        var indexY = y + GAME_CONFIG_1.default.INDEX_Y_OFFSET;
        ctx.fillText("(" + position.row + ", " + position.col + ")", indexX, indexY);
        Suit_1.default.getDrawFunction(card.suit)(ctx, x + GAME_CONFIG_1.default.SUIT_X_OFFSET, y + GAME_CONFIG_1.default.SUIT_Y_OFFSET, GAME_CONFIG_1.default.SUIT_WIDTH, GAME_CONFIG_1.default.SUIT_HEIGHT);
        //console.log(`card: ${card.toString()} position x: ${x}, y: ${y}`);
    };
    Board.prototype.drawBorderedRect = function (ctx, position, color) {
        var y = position.row * GAME_CONFIG_1.default.CARD_SIZE;
        var x = position.col * GAME_CONFIG_1.default.CARD_SIZE;
        var width = GAME_CONFIG_1.default.CARD_SIZE;
        var thickness = 1;
        ctx.fillStyle = "#000";
        ctx.fillRect(x, y, width, width);
        ctx.fillStyle = color;
        ctx.fillRect(x + thickness, y + thickness, width - thickness * 2, width - thickness * 2);
    };
    Board.prototype.cloneSlots = function () {
        var slots = [];
        this.slots.map(function (row) {
            slots.push(row.map(function (slot) { return slot.clone(); }));
        });
        return slots;
    };
    return Board;
}());
exports.default = Board;
exports.DEFAULT_BOARD_STATE = [
    [
        new Slot_1.default(true),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.TWO, Suit_1.default.SPADE)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.THREE, Suit_1.default.SPADE)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.FOUR, Suit_1.default.SPADE)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.FIVE, Suit_1.default.SPADE)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.SIX, Suit_1.default.SPADE)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.SEVEN, Suit_1.default.SPADE)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.EIGHT, Suit_1.default.SPADE)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.NINE, Suit_1.default.SPADE)),
        new Slot_1.default(true)
    ],
    [
        new Slot_1.default(false, new Card_1.default(Rank_1.default.SIX, Suit_1.default.CLUB)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.FIVE, Suit_1.default.CLUB)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.FOUR, Suit_1.default.CLUB)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.THREE, Suit_1.default.CLUB)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.TWO, Suit_1.default.CLUB)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.ACE, Suit_1.default.HEART)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.KING, Suit_1.default.HEART)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.QUEEN, Suit_1.default.HEART)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.TEN, Suit_1.default.HEART)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.TEN, Suit_1.default.SPADE))
    ],
    [
        new Slot_1.default(false, new Card_1.default(Rank_1.default.SEVEN, Suit_1.default.CLUB)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.ACE, Suit_1.default.SPADE)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.TWO, Suit_1.default.DIAMOND)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.THREE, Suit_1.default.DIAMOND)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.FOUR, Suit_1.default.DIAMOND)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.FIVE, Suit_1.default.DIAMOND)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.SIX, Suit_1.default.DIAMOND)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.SEVEN, Suit_1.default.DIAMOND)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.NINE, Suit_1.default.HEART)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.QUEEN, Suit_1.default.SPADE))
    ],
    [
        new Slot_1.default(false, new Card_1.default(Rank_1.default.EIGHT, Suit_1.default.CLUB)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.KING, Suit_1.default.SPADE)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.SIX, Suit_1.default.CLUB)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.FIVE, Suit_1.default.CLUB)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.FOUR, Suit_1.default.CLUB)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.THREE, Suit_1.default.CLUB)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.TWO, Suit_1.default.CLUB)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.EIGHT, Suit_1.default.DIAMOND)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.EIGHT, Suit_1.default.HEART)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.KING, Suit_1.default.SPADE))
    ],
    [
        new Slot_1.default(false, new Card_1.default(Rank_1.default.NINE, Suit_1.default.CLUB)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.QUEEN, Suit_1.default.SPADE)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.SEVEN, Suit_1.default.CLUB)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.SIX, Suit_1.default.HEART)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.FIVE, Suit_1.default.HEART)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.FOUR, Suit_1.default.HEART)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.ACE, Suit_1.default.HEART)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.NINE, Suit_1.default.DIAMOND)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.SEVEN, Suit_1.default.HEART)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.ACE, Suit_1.default.SPADE))
    ],
    [
        new Slot_1.default(false, new Card_1.default(Rank_1.default.TEN, Suit_1.default.CLUB)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.TEN, Suit_1.default.SPADE)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.EIGHT, Suit_1.default.CLUB)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.SEVEN, Suit_1.default.HEART)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.TWO, Suit_1.default.HEART)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.THREE, Suit_1.default.HEART)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.KING, Suit_1.default.HEART)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.TEN, Suit_1.default.DIAMOND)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.SIX, Suit_1.default.HEART)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.TWO, Suit_1.default.DIAMOND))
    ],
    [
        new Slot_1.default(false, new Card_1.default(Rank_1.default.QUEEN, Suit_1.default.CLUB)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.NINE, Suit_1.default.SPADE)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.NINE, Suit_1.default.CLUB)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.EIGHT, Suit_1.default.HEART)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.NINE, Suit_1.default.HEART)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.TEN, Suit_1.default.HEART)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.QUEEN, Suit_1.default.HEART)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.QUEEN, Suit_1.default.DIAMOND)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.FIVE, Suit_1.default.HEART)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.THREE, Suit_1.default.DIAMOND))
    ],
    [
        new Slot_1.default(false, new Card_1.default(Rank_1.default.KING, Suit_1.default.CLUB)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.EIGHT, Suit_1.default.SPADE)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.TEN, Suit_1.default.CLUB)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.QUEEN, Suit_1.default.CLUB)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.KING, Suit_1.default.CLUB)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.ACE, Suit_1.default.CLUB)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.ACE, Suit_1.default.DIAMOND)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.KING, Suit_1.default.DIAMOND)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.FOUR, Suit_1.default.HEART)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.FOUR, Suit_1.default.DIAMOND))
    ],
    [
        new Slot_1.default(false, new Card_1.default(Rank_1.default.ACE, Suit_1.default.CLUB)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.SEVEN, Suit_1.default.SPADE)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.SIX, Suit_1.default.SPADE)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.FIVE, Suit_1.default.SPADE)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.FOUR, Suit_1.default.SPADE)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.THREE, Suit_1.default.SPADE)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.TWO, Suit_1.default.SPADE)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.TWO, Suit_1.default.HEART)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.THREE, Suit_1.default.HEART)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.FIVE, Suit_1.default.DIAMOND))
    ],
    [
        new Slot_1.default(true),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.ACE, Suit_1.default.DIAMOND)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.KING, Suit_1.default.DIAMOND)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.QUEEN, Suit_1.default.DIAMOND)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.TEN, Suit_1.default.DIAMOND)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.NINE, Suit_1.default.DIAMOND)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.EIGHT, Suit_1.default.DIAMOND)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.SEVEN, Suit_1.default.DIAMOND)),
        new Slot_1.default(false, new Card_1.default(Rank_1.default.SIX, Suit_1.default.DIAMOND)),
        new Slot_1.default(true)
    ]
];
//# sourceMappingURL=Board.js.map