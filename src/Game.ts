import Player from "./Player";
import Board, { DEFAULT_BOARD_STATE } from "./Board";
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

export default class Game {
  private readonly player1: Player;
  private readonly player2: Player;
  private readonly board: Board;
  private readonly deck: Deck;
  private readonly canvas: HTMLCanvasElement;
  private readonly computer1: Computer;
  private readonly computer2: Computer2;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.player1 = new Player(
      "computer1",
      GAME_CONFIG.NUMBER_OF_CARDS_TWO_PLAYER,
      false,
      ChipColor.GREEN
    );
    this.player2 = new Player(
      "computer2",
      GAME_CONFIG.NUMBER_OF_CARDS_TWO_PLAYER,
      true,
      ChipColor.RED
    );

    this.computer1 = new Computer();
    this.computer2 = new Computer2();

    this.board = new Board();
    this.deck = new Deck();

    this.start();
  }

  private start() {
    this.deck.shuffle();
    this.dealCards(this.player1);
    this.dealCards(this.player2);

    this.board.displayBoard(this.canvas);
    this.playOneRound();
  }

  private playOneRound() {
    try {
      this.nextPlayerMove(this.player1, this.computer1);
      this.board.displayBoard(this.canvas);

      // check if game is over and player won the game
      if (this.isGameOver(this.player1)) {
        this.markGameOver(`${this.player1.name} wins!`);
        return;
      }

      this.nextPlayerMove(this.player2, this.computer2);
      this.board.displayBoard(this.canvas);

      // check if game is over and player won the game
      if (this.isGameOver(this.player2)) {
        this.markGameOver(`${this.player2.name} wins!`);
        return;
      }

      setTimeout(() => {
        this.playOneRound();
      }, GAME_CONFIG.TURN_INTERVAL);
    } catch (e) {
      console.log(e, this);
      this.markGameOver(e.message);
    }
  }

  private nextPlayerMove(player: Player, computer: Computer | Computer2) {
    // clone cards before giving it to the external call
    const move = computer.nextMove(
      this.board.cloneSlots(),
      player.cloneCards()
    );

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
        // TODO: detect too many recursion
        //this.nextPlayerMove(player, computer);
        return;
      case MoveType.REMOVE_CHIP:
        if (move.position == null) {
          throw Error(`Invalid position [${move.position}]`);
        }
        this.validateRemoveChip(move, player);
        this.board.removeChip(move.position);
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

    const space = this.board.slots[(move.position.row, move.position.col)];
    if (!(space instanceof Chip)) {
      throw Error(`There is no chip at position: ${move.position.toString()}`);
    }

    if (space.color === player.chipColor) {
      throw Error("Select chip of opponent player.");
    }

    // TODO: check if chip is part of a sequence
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

  // TODO: complete it
  private isGameOver(player: Player): boolean {
    return GameOverCalculator.calculate(this.board, player.chipColor);
  }

  private markGameOver(message: string) {
    alert(message);
    console.log(this);
    this.board.displayBoard(this.canvas);
    // clearInterval(this.interval);
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
}
