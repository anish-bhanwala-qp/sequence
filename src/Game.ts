import Player from "./Player";
import Board from "./Board";
import Deck from "./Deck";
import GAME_CONFIG from "./GAME_CONFIG";
import Move from "./Move";
import Card from "./Card";
import Computer from "./Computer";
import Chip from "./Chip";
import MoveType from "./MoveType";
import ChipColor from "./ChipColor";
import GameOverCalculator from "./GameOverCalculator";
import Computer2 from "./Computer2";

type playerAlgoMethodSignature = (
  boardCards: (Card | null | Chip)[][],
  playerCards: Card[]
) => Move;

export default class Game {
  private readonly player1: Player;
  private readonly player2: Player;
  private readonly board: Board;
  private readonly deck: Deck;
  private readonly canvas: HTMLCanvasElement;
  private readonly resultHeader: HTMLHeadElement;
  private readonly player1DisplayDiv: HTMLDivElement;
  private readonly player2DisplayDiv: HTMLDivElement;
  private readonly computer1: playerAlgoMethodSignature;
  private readonly computer2: playerAlgoMethodSignature;
  private gameInterval?: NodeJS.Timeout;

  constructor(
    player1Name: string,
    player1MoveAlgo: playerAlgoMethodSignature,
    player2Name: string = "2nd player",
    player2MoveAlgo: playerAlgoMethodSignature = Computer
  ) {
    if (player1MoveAlgo == null || typeof player1MoveAlgo !== "function") {
      throw Error("Must provide game algorithm function to play");
    }
    this.canvas = this.createCanvas();
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
      ChipColor.RED
    );

    this.computer1 = player1MoveAlgo;
    this.computer2 = player2MoveAlgo;

    this.board = new Board();
    this.deck = new Deck();

    this.start();
  }

  public start() {
    this.deck.shuffle();
    this.dealCards(this.player1);
    this.dealCards(this.player2);

    this.display();
    this.gameInterval = setInterval(() => {
      this.playOneRound();
    }, GAME_CONFIG.TURN_INTERVAL);
  }

  private playOneRound() {
    try {
      this.nextPlayerMove(this.player1, this.computer1);
      this.display();

      // check if game is over and player won the game
      if (this.isGameOver(this.player1)) {
        this.markGameOver(`${this.player1.name} wins!`);
        return;
      }

      this.nextPlayerMove(this.player2, this.computer2);
      this.display();

      // check if game is over and player won the game
      if (this.isGameOver(this.player2)) {
        this.markGameOver(`${this.player2.name} wins!`);
        return;
      }
    } catch (e) {
      console.log(e, this);
      this.markGameOver(e.message);
    }
  }

  private nextPlayerMove(
    player: Player,
    playerAlgoMethod: playerAlgoMethodSignature,
    secondTurn = false
  ) {
    // clone cards before giving it to the external call
    const move = playerAlgoMethod(this.board.cloneSlots(), player.cloneCards());

    // validate move has valid fields
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
        this.nextPlayerMove(player, playerAlgoMethod, true);
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

  private validateRemoveChip(move: Move, player: Player) {
    if (!move.card.isOneEyedJack()) {
      throw Error(`Card is not oneEyedJack [${move.card.toString()}]`);
    }

    if (move.position == null) {
      throw Error(`Invalid position [${move.position}]`);
    }

    const space = this.board.slots[move.position.row][move.position.col];
    if (!(space instanceof Chip)) {
      throw Error(
        `There is no chip at position: ${move.position.toString()} ${space}`
      );
    }

    if (space.color === player.chipColor) {
      throw Error("Select chip of opponent player.");
    }

    if (space instanceof Chip && space.isInSequence()) {
      throw Error("Chip is already part of a sequence");
    }
  }

  private validateDeadCard(player: Player, move: Move) {
    for (let row = 0; row < this.board.slots.length; row = row + 1) {
      const slotsRow = this.board.slots[row];
      for (let col = 0; col < slotsRow.length; col = col + 1) {
        const space = slotsRow[col];
        if (space instanceof Card && move.card.matches(space)) {
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

    throw new Error(`Card should belong to player's hand: ${card.toString}`);
  }

  private display() {
    this.board.displayBoard(this.canvas);
    this.player1.display(this.player1DisplayDiv);
    this.player2.display(this.player2DisplayDiv);
  }

  // TODO: complete it
  private isGameOver(player: Player): boolean {
    return GameOverCalculator.calculate(this.board, player.chipColor);
  }

  private markGameOver(message: string) {
    this.resultHeader.innerText = message;
    this.resultHeader.style.display = "block";
    console.log(this);
    if (this.gameInterval != null) {
      clearInterval(this.gameInterval);
    }
    this.display();
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
    h1.style.fontSize = "50px";
    h1.style.cssFloat = "right";
    this.appendElementToBody(h1);

    return h1;
  }

  createPlayerCardsHolder(id: string): HTMLDivElement {
    const div = document.createElement("div");
    div.id = id;
    div.style.fontSize = "18px";
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
}
