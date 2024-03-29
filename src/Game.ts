import Player from "./Player";
import Board from "./Board";
import Deck from "./Deck";
import GAME_CONFIG, { setupGameConfig } from "./GAME_CONFIG";
import Move from "./Move";
import Card from "./Card";
import Computer from "./Computer";
import Chip from "./Chip";
import MoveType from "./MoveType";
import ChipColor from "./ChipColor";
import GameOverCalculator from "./GameOverCalculator";
import Computer2 from "./Computer2";
import Suit from "./Suit";
import Rank from "./Rank";
import Position from "./Position";
import Slot from "./Slot";

type AlgorithmMethodSignature = (
  boardCards: Slot[][],
  playerCards: Card[],
  chipColor: ChipColor
) => Move;

export default class Game {
  private readonly player1: Player;
  private readonly player2: Player;
  private readonly board: Board;
  private readonly deck: Deck;
  private readonly canvas: HTMLCanvasElement;
  private readonly ctx: CanvasRenderingContext2D;
  private readonly resultHeader: HTMLHeadElement;
  private readonly player1DisplayDiv: HTMLDivElement;
  private readonly player2DisplayDiv: HTMLDivElement;
  private readonly computer1: AlgorithmMethodSignature;
  private readonly computer2: AlgorithmMethodSignature;
  private turnTimeout?: NodeJS.Timeout;
  private readonly promise: Promise<string>;
  private resolvePromise?: (playerName: string) => void;

  constructor(
    player1Name: string,
    player1Algorithm: AlgorithmMethodSignature,
    player2Name: string = "Computer",
    player2Algorithm: AlgorithmMethodSignature = Computer,
    displaySmall = false
  ) {
    if (player1Algorithm == null || typeof player1Algorithm !== "function") {
      throw Error("Must provide game algorithm function to play");
    }
    setupGameConfig(displaySmall);

    this.promise = new Promise(resolve => {
      this.resolvePromise = resolve;
    });
    this.canvas = this.createCanvas();
    this.ctx = this.setupCanvas();
    this.resultHeader = this.createResultHeading();
    this.player1DisplayDiv = this.createPlayerCardsHolder("player1DisplayDiv");
    this.player2DisplayDiv = this.createPlayerCardsHolder("player2DisplayDiv");

    this.player1 = new Player(
      player1Name,
      GAME_CONFIG.NUMBER_OF_CARDS_TWO_PLAYER,
      false,
      ChipColor.GREEN
    );
    this.player2 = new Player(
      player2Name,
      GAME_CONFIG.NUMBER_OF_CARDS_TWO_PLAYER,
      true,
      ChipColor.BLUE
    );

    this.computer1 = player1Algorithm;
    this.computer2 = player2Algorithm;

    this.board = new Board();
    this.deck = new Deck();
  }

  public start() {
    this.deck.shuffle();
    this.dealCards(this.player1);
    this.dealCards(this.player2);

    this.display();
    this.playOneRound(this.player1, this.computer1);

    return this.promise;
  }

  private playOneRound(player: Player, algo: AlgorithmMethodSignature) {
    try {
      try {
        this.nextPlayerMove(player, algo);
        this.display();
      } catch (e) {
        const otherPlayer =
          player === this.player1 ? this.player2 : this.player1;
        console.error(e);
        this.markGameOver(
          `${otherPlayer.name} won because of other player's 
          error: <small style="color: #848484">${e.message}</small>`,
          otherPlayer
        );
        return;
      }

      // check if game is over and player won the game
      if (this.isGameOver(player)) {
        this.markGameOver(`${player.name} wins!`, player);
        return;
      }

      this.turnTimeout = setTimeout(
        () =>
          this.playOneRound(
            player === this.player1 ? this.player2 : this.player1,
            player === this.player1 ? this.computer2 : this.computer1
          ),
        GAME_CONFIG.TURN_INTERVAL
      );
    } catch (e) {
      console.error(e, this);
      this.markGameOver(`Game error: ${e.message}`, null);
    }
  }

  private nextPlayerMove(
    player: Player,
    algorithm: AlgorithmMethodSignature,
    secondTurn = false
  ) {
    // clone cards before giving it to the external call
    const tempMove = algorithm(
      this.board.cloneSlots(),
      player.cloneCards(),
      player.chipColor
    );

    // validate move has valid fields
    this.validateMoveStructure(tempMove);

    const move = this.createMoveClassObject(tempMove);

    // validate player has this card
    this.validatePlayerHasCard(player, move.card);
    this.dealNewCardToPlayer(player, move.card);

    switch (move.type) {
      case MoveType.PLACE_CHIP:
        if (move.position == null) {
          throw Error("Invalid position to place chip");
        }
        this.board.placeChip(
          new Chip(player.chipColor),
          move.card,
          move.position
        );
        break;
      case MoveType.REPLACE_DEAD_CARD:
        this.validateDeadCard(player, move);
        // if trying to replace dead card again, just ignore
        if (secondTurn) {
          return;
        }
        this.display();
        this.nextPlayerMove(player, algorithm, true);
        return;
      case MoveType.REMOVE_CHIP:
        if (move.position == null) {
          throw Error(`Invalid position [${move.position}]`);
        }
        this.validateRemoveChip(move, player);
        this.board.removeChip(move.position);
        return;
      default:
        throw new Error(`Invalid move type: ${move.type}`);
    }
    // if place chip - validate chip can be placed at given position
    // if place chip - if jack check if position is open
    // if replace dead card - validate card is actually dead card
    // if replace dead card - give the turn again to the same player
    // if remove chip - validate card is open and is not part of a sequence

    // otherwise replace player's card from the deck
  }

  /*  Move object structure passed is not instance of 
      Move, Card & Position classes. So we cannot call methods on 
      these classes e.g. card.isTwoEyedJack().
   */
  private createMoveClassObject(tempMove: Move): Move {
    return new Move(
      tempMove.type,
      new Card(tempMove.card.rank, tempMove.card.suit),
      tempMove.position != null
        ? new Position(tempMove.position.row, tempMove.position.col)
        : tempMove.position
    );
  }

  private validateMoveStructure(move: Move) {
    if (move == null) {
      throw Error("Move cannot be null or undefined");
    }

    if (
      move.type == null ||
      !(
        move.type === MoveType.REMOVE_CHIP ||
        move.type === MoveType.PLACE_CHIP ||
        move.type === MoveType.REPLACE_DEAD_CARD
      )
    ) {
      console.log("Move", move);
      throw Error(`Invalid move structure. move.type must be number 1,2 or 3.`);
    }

    if (move.card == null || move.card.suit == null || move.card.rank == null) {
      console.log("Move", move);
      throw Error(`Invalid move structure. move.card should have suit & rank.`);
    }

    Suit.validate(move.card.suit);
    Rank.validate(move.card.rank);

    if (
      move.type !== MoveType.REPLACE_DEAD_CARD &&
      (move.position == null ||
        move.position.row == null ||
        move.position.col == null ||
        move.position.row < 0 ||
        move.position.row > 9 ||
        move.position.col < 0 ||
        move.position.col > 9)
    ) {
      console.log("Move", move);
      throw Error(`Invalid move structure. move.position must have row & col attributes 
      with values between 0 & 9 inclusive.`);
    }
  }

  private validateRemoveChip(move: Move, player: Player) {
    if (!move.card.isOneEyedJack()) {
      throw Error(`Card is not oneEyedJack [${move.card.toString()}]`);
    }

    if (move.position == null) {
      throw Error(`Invalid position [${move.position}]`);
    }

    const slot = this.board.slots[move.position.row][move.position.col];
    if (slot.chip == null) {
      throw Error(
        `There is no chip at position: ${move.position.toString()} ${slot}`
      );
    }

    if (slot.chip.color === player.chipColor) {
      throw Error("Select chip of opponent player.");
    }

    if (slot.chip != null && slot.chip.isInSequence()) {
      throw Error("Chip is already part of a sequence");
    }
  }

  private validateDeadCard(player: Player, move: Move) {
    for (let row = 0; row < this.board.slots.length; row = row + 1) {
      const slotsRow = this.board.slots[row];
      for (let col = 0; col < slotsRow.length; col = col + 1) {
        const slot = slotsRow[col];
        if (slot.isEmptySlot() && slot.hasMatchingCard(move.card)) {
          throw Error(`Card is not dead: ${move.card.toString()}`);
        }
      }
    }
  }

  private validatePlayerHasCard(player: Player, card: Card) {
    for (const playerCard of player.cards) {
      if (playerCard.matches(card)) {
        return;
      }
    }

    throw new Error(`Card should belong to player's hand: ${card.toString()}`);
  }

  private display() {
    requestAnimationFrame(() => {
      this.board.displayBoard(this.ctx);
    });
    this.player1.display(this.player1DisplayDiv);
    this.player2.display(this.player2DisplayDiv);
  }

  private isGameOver(player: Player): boolean {
    return GameOverCalculator.calculate(this.board, player.chipColor);
  }

  private markGameOver(message: string, player: Player | null) {
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
  }

  private dealCards(player: Player) {
    for (let i = 0; i < GAME_CONFIG.NUMBER_OF_CARDS_TWO_PLAYER; i = i + 1) {
      this.dealCardToPlayer(player);
    }
  }

  private dealCardToPlayer(player: Player) {
    const card = this.deck.dealCard();
    player.addCard(card);
  }

  private dealNewCardToPlayer(player: Player, oldCard: Card) {
    player.discardCard(oldCard);
    this.dealCardToPlayer(player);
  }

  createResultHeading(): HTMLHeadingElement {
    const h1 = document.createElement("h1");
    h1.id = "resultHeading";
    h1.style.display = "none";
    h1.style.fontSize = GAME_CONFIG.RESULT_DIV_FONT_SIZE;
    h1.style.cssFloat = "right";
    this.appendElementToBody(h1);

    return h1;
  }

  createPlayerCardsHolder(id: string): HTMLDivElement {
    const div = document.createElement("div");
    div.id = id;
    div.style.fontSize = GAME_CONFIG.PLAYER_CARDS_DIV_FONT_SIZE;
    this.appendElementToBody(div);

    return div;
  }

  createCanvas(): HTMLCanvasElement {
    const canvas = document.createElement("canvas");
    canvas.width = GAME_CONFIG.CANVAS_WIDTH;
    canvas.height = GAME_CONFIG.CANVAS_HEIGHT;
    canvas.id = "canvasId";

    this.appendElementToBody(canvas);
    return canvas;
  }

  appendElementToBody(element: any) {
    const body = document.getElementsByTagName("body")[0];
    body.appendChild(element);
  }

  // https://www.html5rocks.com/en/tutorials/canvas/hidpi/
  setupCanvas() {
    // Get the device pixel ratio, falling back to 1.
    var dpr = window.devicePixelRatio || 1;
    // Get the size of the this.canvas in CSS pixels.
    var rect = this.canvas.getBoundingClientRect();
    // Give the this.canvas pixel dimensions of their CSS
    // size * the device pixel ratio.
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    const ctx = this.canvas.getContext("2d");
    if (ctx === null) {
      throw Error("Unable to get CanvasRenderingContext2D");
    }
    // Scale all drawing operations by the dpr, so you
    // don't have to worry about the difference.
    ctx.scale(dpr, dpr);
    return ctx;
  }
}
