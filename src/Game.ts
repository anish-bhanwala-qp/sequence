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

export default class Game {
  private readonly player1: Player;
  private readonly player2: Player;
  private readonly board: Board;
  private readonly deck: Deck;
  private interval: NodeJS.Timeout;
  private readonly canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.player1 = new Player(
      "player1",
      GAME_CONFIG.NUMBER_OF_CARDS_TWO_PLAYER,
      false,
      ChipColor.GREEN
    );
    this.player2 = new Player(
      "computer",
      GAME_CONFIG.NUMBER_OF_CARDS_TWO_PLAYER,
      true,
      ChipColor.RED
    );

    this.board = new Board();
    this.deck = new Deck();
    this.interval = this.start();
  }

  private start() {
    this.deck.shuffle();
    this.dealCards(this.player1);
    this.dealCards(this.player2);

    const computer1 = new Computer();
    const computer2 = new Computer();

    return setInterval(() => {
      this.board.displayBoard(this.canvas);
      this.nextPlayerMove(this.player1, computer1);
      this.board.displayBoard(this.canvas);
      this.nextPlayerMove(this.player2, computer2);
      this.board.displayBoard(this.canvas);
    }, 2000);
  }

  private nextPlayerMove(player: Player, computer: Computer) {
    const move = computer.nextMove(this.board.cards, player.cards);
    console.log(move);
    // validate move has valid fields
    // validate player has this card
    this.validatePlayerHasCard(player, move.card);
    this.dealNewCardToPlayer(player, move.card);

    switch (move.type) {
      case MoveType.PLACE_CHIP:
        this.board.placeChip(
          new Chip(player.chipColor),
          move.card,
          move.position
        );
        break;
      default:
        throw new Error(`Invalid move type: ${move.type}`);
    }
    // if place chip - validate chip can be placed at given position
    // if place chip - if jack check if position is open
    // if replace dead card - validate card is actually dead card
    // if replace dead card - give the turn again to the same player
    // if remove chip - validate card is open and is not part of a sequence

    // check if game is over and player won the game
    if (this.isGameOver()) {
      this.markGameOver(`${player.name} wins!`);
    }
    // otherwise replace player's card from the deck
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
  private isGameOver(): boolean {
    return false;
  }

  private markGameOver(message: string) {
    alert(message);
    clearInterval(this.interval);
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
