"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = __importDefault(require("./Player"));
var Board_1 = __importDefault(require("./Board"));
var Deck_1 = __importDefault(require("./Deck"));
var GAME_CONFIG_1 = __importStar(require("./GAME_CONFIG"));
var Move_1 = __importDefault(require("./Move"));
var Card_1 = __importDefault(require("./Card"));
var Computer_1 = __importDefault(require("./Computer"));
var Chip_1 = __importDefault(require("./Chip"));
var MoveType_1 = __importDefault(require("./MoveType"));
var ChipColor_1 = __importDefault(require("./ChipColor"));
var GameOverCalculator_1 = __importDefault(require("./GameOverCalculator"));
var Suit_1 = __importDefault(require("./Suit"));
var Rank_1 = __importDefault(require("./Rank"));
var Position_1 = __importDefault(require("./Position"));
var Game = /** @class */ (function () {
    function Game(player1Name, player1Algorithm, player2Name, player2Algorithm, displaySmall) {
        var _this = this;
        if (player2Name === void 0) { player2Name = "Computer"; }
        if (player2Algorithm === void 0) { player2Algorithm = Computer_1.default; }
        if (displaySmall === void 0) { displaySmall = false; }
        if (player1Algorithm == null || typeof player1Algorithm !== "function") {
            throw Error("Must provide game algorithm function to play");
        }
        GAME_CONFIG_1.setupGameConfig(displaySmall);
        this.promise = new Promise(function (resolve) {
            _this.resolvePromise = resolve;
        });
        this.canvas = this.createCanvas();
        this.ctx = this.setupCanvas();
        this.resultHeader = this.createResultHeading();
        this.player1DisplayDiv = this.createPlayerCardsHolder("player1DisplayDiv");
        this.player2DisplayDiv = this.createPlayerCardsHolder("player2DisplayDiv");
        this.player1 = new Player_1.default(player1Name, GAME_CONFIG_1.default.NUMBER_OF_CARDS_TWO_PLAYER, false, ChipColor_1.default.GREEN);
        this.player2 = new Player_1.default(player2Name, GAME_CONFIG_1.default.NUMBER_OF_CARDS_TWO_PLAYER, true, ChipColor_1.default.BLUE);
        this.computer1 = player1Algorithm;
        this.computer2 = player2Algorithm;
        this.board = new Board_1.default();
        this.deck = new Deck_1.default();
    }
    Game.prototype.start = function () {
        this.deck.shuffle();
        this.dealCards(this.player1);
        this.dealCards(this.player2);
        this.display();
        this.playOneRound(this.player1, this.computer1);
        return this.promise;
    };
    Game.prototype.playOneRound = function (player, algo) {
        var _this = this;
        try {
            try {
                this.nextPlayerMove(player, algo);
                this.display();
            }
            catch (e) {
                var otherPlayer = player === this.player1 ? this.player2 : this.player1;
                console.error(e);
                this.markGameOver(otherPlayer.name + " won because of other player's \n          error: <small style=\"color: #848484\">" + e.message + "</small>", otherPlayer);
                return;
            }
            // check if game is over and player won the game
            if (this.isGameOver(player)) {
                this.markGameOver(player.name + " wins!", player);
                return;
            }
            this.turnTimeout = setTimeout(function () {
                return _this.playOneRound(player === _this.player1 ? _this.player2 : _this.player1, player === _this.player1 ? _this.computer2 : _this.computer1);
            }, GAME_CONFIG_1.default.TURN_INTERVAL);
        }
        catch (e) {
            console.error(e, this);
            this.markGameOver("Game error: " + e.message, null);
        }
    };
    Game.prototype.nextPlayerMove = function (player, algorithm, secondTurn) {
        if (secondTurn === void 0) { secondTurn = false; }
        // clone cards before giving it to the external call
        var tempMove = algorithm(this.board.cloneSlots(), player.cloneCards(), player.chipColor);
        // validate move has valid fields
        this.validateMoveStructure(tempMove);
        var move = this.createMoveClassObject(tempMove);
        // validate player has this card
        this.validatePlayerHasCard(player, move.card);
        this.dealNewCardToPlayer(player, move.card);
        switch (move.type) {
            case MoveType_1.default.PLACE_CHIP:
                if (move.position == null) {
                    throw Error("Invalid position to place chip");
                }
                this.board.placeChip(new Chip_1.default(player.chipColor), move.card, move.position);
                break;
            case MoveType_1.default.REPLACE_DEAD_CARD:
                this.validateDeadCard(player, move);
                // if trying to replace dead card again, just ignore
                if (secondTurn) {
                    return;
                }
                this.display();
                this.nextPlayerMove(player, algorithm, true);
                return;
            case MoveType_1.default.REMOVE_CHIP:
                if (move.position == null) {
                    throw Error("Invalid position [" + move.position + "]");
                }
                this.validateRemoveChip(move, player);
                this.board.removeChip(move.position);
                return;
            default:
                throw new Error("Invalid move type: " + move.type);
        }
        // if place chip - validate chip can be placed at given position
        // if place chip - if jack check if position is open
        // if replace dead card - validate card is actually dead card
        // if replace dead card - give the turn again to the same player
        // if remove chip - validate card is open and is not part of a sequence
        // otherwise replace player's card from the deck
    };
    /*  Move object structure passed is not instance of
        Move, Card & Position classes. So we cannot call methods on
        these classes e.g. card.isTwoEyedJack().
     */
    Game.prototype.createMoveClassObject = function (tempMove) {
        return new Move_1.default(tempMove.type, new Card_1.default(tempMove.card.rank, tempMove.card.suit), tempMove.position != null
            ? new Position_1.default(tempMove.position.row, tempMove.position.col)
            : tempMove.position);
    };
    Game.prototype.validateMoveStructure = function (move) {
        if (move == null) {
            throw Error("Move cannot be null or undefined");
        }
        if (move.type == null ||
            !(move.type === MoveType_1.default.REMOVE_CHIP ||
                move.type === MoveType_1.default.PLACE_CHIP ||
                move.type === MoveType_1.default.REPLACE_DEAD_CARD)) {
            console.log("Move", move);
            throw Error("Invalid move structure. move.type must be number 1,2 or 3.");
        }
        if (move.card == null || move.card.suit == null || move.card.rank == null) {
            console.log("Move", move);
            throw Error("Invalid move structure. move.card should have suit & rank.");
        }
        Suit_1.default.validate(move.card.suit);
        Rank_1.default.validate(move.card.rank);
        if (move.type !== MoveType_1.default.REPLACE_DEAD_CARD &&
            (move.position == null ||
                move.position.row == null ||
                move.position.col == null ||
                move.position.row < 0 ||
                move.position.row > 9 ||
                move.position.col < 0 ||
                move.position.col > 9)) {
            console.log("Move", move);
            throw Error("Invalid move structure. move.position must have row & col attributes \n      with values between 0 & 9 inclusive.");
        }
    };
    Game.prototype.validateRemoveChip = function (move, player) {
        if (!move.card.isOneEyedJack()) {
            throw Error("Card is not oneEyedJack [" + move.card.toString() + "]");
        }
        if (move.position == null) {
            throw Error("Invalid position [" + move.position + "]");
        }
        var slot = this.board.slots[move.position.row][move.position.col];
        if (slot.chip == null) {
            throw Error("There is no chip at position: " + move.position.toString() + " " + slot);
        }
        if (slot.chip.color === player.chipColor) {
            throw Error("Select chip of opponent player.");
        }
        if (slot.chip != null && slot.chip.isInSequence()) {
            throw Error("Chip is already part of a sequence");
        }
    };
    Game.prototype.validateDeadCard = function (player, move) {
        for (var row = 0; row < this.board.slots.length; row = row + 1) {
            var slotsRow = this.board.slots[row];
            for (var col = 0; col < slotsRow.length; col = col + 1) {
                var slot = slotsRow[col];
                if (slot.isEmptySlot() && slot.hasMatchingCard(move.card)) {
                    throw Error("Card is not dead: " + move.card.toString());
                }
            }
        }
    };
    Game.prototype.validatePlayerHasCard = function (player, card) {
        for (var _i = 0, _a = player.cards; _i < _a.length; _i++) {
            var playerCard = _a[_i];
            if (playerCard.matches(card)) {
                return;
            }
        }
        throw new Error("Card should belong to player's hand: " + card.toString());
    };
    Game.prototype.display = function () {
        var _this = this;
        requestAnimationFrame(function () {
            _this.board.displayBoard(_this.ctx);
        });
        this.player1.display(this.player1DisplayDiv);
        this.player2.display(this.player2DisplayDiv);
    };
    Game.prototype.isGameOver = function (player) {
        return GameOverCalculator_1.default.calculate(this.board, player.chipColor);
    };
    Game.prototype.markGameOver = function (message, player) {
        this.resultHeader.innerHTML = message;
        this.resultHeader.style.display = "block";
        // console.log(this);
        if (this.turnTimeout != null) {
            clearTimeout(this.turnTimeout);
        }
        this.display();
        if (this.resolvePromise == null) {
            throw Error("resolvePromise is undefined");
        }
        this.resolvePromise(player == null ? "Game Draw" : player.name);
    };
    Game.prototype.dealCards = function (player) {
        for (var i = 0; i < GAME_CONFIG_1.default.NUMBER_OF_CARDS_TWO_PLAYER; i = i + 1) {
            this.dealCardToPlayer(player);
        }
    };
    Game.prototype.dealCardToPlayer = function (player) {
        var card = this.deck.dealCard();
        player.addCard(card);
    };
    Game.prototype.dealNewCardToPlayer = function (player, oldCard) {
        player.discardCard(oldCard);
        this.dealCardToPlayer(player);
    };
    Game.prototype.createResultHeading = function () {
        var h1 = document.createElement("h1");
        h1.id = "resultHeading";
        h1.style.display = "none";
        h1.style.fontSize = GAME_CONFIG_1.default.RESULT_DIV_FONT_SIZE;
        h1.style.cssFloat = "right";
        this.appendElementToBody(h1);
        return h1;
    };
    Game.prototype.createPlayerCardsHolder = function (id) {
        var div = document.createElement("div");
        div.id = id;
        div.style.fontSize = GAME_CONFIG_1.default.PLAYER_CARDS_DIV_FONT_SIZE;
        this.appendElementToBody(div);
        return div;
    };
    Game.prototype.createCanvas = function () {
        var canvas = document.createElement("canvas");
        canvas.width = GAME_CONFIG_1.default.CANVAS_WIDTH;
        canvas.height = GAME_CONFIG_1.default.CANVAS_HEIGHT;
        canvas.id = "canvasId";
        this.appendElementToBody(canvas);
        return canvas;
    };
    Game.prototype.appendElementToBody = function (element) {
        var body = document.getElementsByTagName("body")[0];
        body.appendChild(element);
    };
    // https://www.html5rocks.com/en/tutorials/canvas/hidpi/
    Game.prototype.setupCanvas = function () {
        // Get the device pixel ratio, falling back to 1.
        var dpr = window.devicePixelRatio || 1;
        // Get the size of the this.canvas in CSS pixels.
        var rect = this.canvas.getBoundingClientRect();
        // Give the this.canvas pixel dimensions of their CSS
        // size * the device pixel ratio.
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        var ctx = this.canvas.getContext("2d");
        if (ctx === null) {
            throw Error("Unable to get CanvasRenderingContext2D");
        }
        // Scale all drawing operations by the dpr, so you
        // don't have to worry about the difference.
        ctx.scale(dpr, dpr);
        return ctx;
    };
    return Game;
}());
exports.default = Game;
//# sourceMappingURL=Game.js.map