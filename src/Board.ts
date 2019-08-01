import Card from "./Card";
import Rank from "./Rank";
import Suit from "./Suit";
import Deck from "./Deck";
import Chip from "./Chip";
import Position from "./Position";
import GAME_CONFIG from "./GAME_CONFIG";

export default class Board {
  readonly slots: (Card | null | Chip)[][];
  constructor() {
    this.slots = [
      [
        null,
        new Card(Rank.TWO, Suit.SPADE),
        new Card(Rank.THREE, Suit.SPADE),
        new Card(Rank.FOUR, Suit.SPADE),
        new Card(Rank.FIVE, Suit.SPADE),
        new Card(Rank.SIX, Suit.SPADE),
        new Card(Rank.SEVEN, Suit.SPADE),
        new Card(Rank.EIGHT, Suit.SPADE),
        new Card(Rank.NINE, Suit.SPADE),
        null
      ],
      [
        new Card(Rank.SIX, Suit.CLUB),
        new Card(Rank.FIVE, Suit.CLUB),
        new Card(Rank.FOUR, Suit.CLUB),
        new Card(Rank.THREE, Suit.CLUB),
        new Card(Rank.TWO, Suit.CLUB),
        new Card(Rank.ACE, Suit.HEART),
        new Card(Rank.KING, Suit.HEART),
        new Card(Rank.QUEEN, Suit.HEART),
        new Card(Rank.TEN, Suit.HEART),
        new Card(Rank.TEN, Suit.SPADE)
      ],
      [
        new Card(Rank.SEVEN, Suit.CLUB),
        new Card(Rank.ACE, Suit.SPADE),
        new Card(Rank.TWO, Suit.DIAMOND),
        new Card(Rank.THREE, Suit.DIAMOND),
        new Card(Rank.FOUR, Suit.DIAMOND),
        new Card(Rank.FIVE, Suit.DIAMOND),
        new Card(Rank.SIX, Suit.DIAMOND),
        new Card(Rank.SEVEN, Suit.DIAMOND),
        new Card(Rank.NINE, Suit.HEART),
        new Card(Rank.QUEEN, Suit.SPADE)
      ],
      [
        new Card(Rank.EIGHT, Suit.CLUB),
        new Card(Rank.KING, Suit.SPADE),
        new Card(Rank.SIX, Suit.CLUB),
        new Card(Rank.FIVE, Suit.CLUB),
        new Card(Rank.FOUR, Suit.CLUB),
        new Card(Rank.THREE, Suit.CLUB),
        new Card(Rank.TWO, Suit.CLUB),
        new Card(Rank.EIGHT, Suit.DIAMOND),
        new Card(Rank.EIGHT, Suit.HEART),
        new Card(Rank.KING, Suit.SPADE)
      ],
      [
        new Card(Rank.NINE, Suit.CLUB),
        new Card(Rank.QUEEN, Suit.SPADE),
        new Card(Rank.SEVEN, Suit.CLUB),
        new Card(Rank.SIX, Suit.HEART),
        new Card(Rank.FIVE, Suit.HEART),
        new Card(Rank.FOUR, Suit.HEART),
        new Card(Rank.ACE, Suit.HEART),
        new Card(Rank.NINE, Suit.DIAMOND),
        new Card(Rank.SEVEN, Suit.HEART),
        new Card(Rank.ACE, Suit.SPADE)
      ],
      [
        new Card(Rank.TEN, Suit.CLUB),
        new Card(Rank.TEN, Suit.SPADE),
        new Card(Rank.EIGHT, Suit.CLUB),
        new Card(Rank.SEVEN, Suit.HEART),
        new Card(Rank.TWO, Suit.HEART),
        new Card(Rank.THREE, Suit.HEART),
        new Card(Rank.KING, Suit.HEART),
        new Card(Rank.TEN, Suit.DIAMOND),
        new Card(Rank.SIX, Suit.HEART),
        new Card(Rank.TWO, Suit.DIAMOND)
      ],
      [
        new Card(Rank.QUEEN, Suit.CLUB),
        new Card(Rank.NINE, Suit.SPADE),
        new Card(Rank.NINE, Suit.CLUB),
        new Card(Rank.EIGHT, Suit.HEART),
        new Card(Rank.NINE, Suit.HEART),
        new Card(Rank.TEN, Suit.HEART),
        new Card(Rank.QUEEN, Suit.HEART),
        new Card(Rank.QUEEN, Suit.DIAMOND),
        new Card(Rank.FIVE, Suit.HEART),
        new Card(Rank.THREE, Suit.DIAMOND)
      ],
      [
        new Card(Rank.KING, Suit.CLUB),
        new Card(Rank.EIGHT, Suit.SPADE),
        new Card(Rank.TEN, Suit.CLUB),
        new Card(Rank.QUEEN, Suit.CLUB),
        new Card(Rank.KING, Suit.CLUB),
        new Card(Rank.ACE, Suit.CLUB),
        new Card(Rank.ACE, Suit.DIAMOND),
        new Card(Rank.KING, Suit.DIAMOND),
        new Card(Rank.FOUR, Suit.HEART),
        new Card(Rank.FOUR, Suit.DIAMOND)
      ],
      [
        new Card(Rank.ACE, Suit.CLUB),
        new Card(Rank.SEVEN, Suit.SPADE),
        new Card(Rank.SIX, Suit.SPADE),
        new Card(Rank.FIVE, Suit.SPADE),
        new Card(Rank.FOUR, Suit.SPADE),
        new Card(Rank.THREE, Suit.SPADE),
        new Card(Rank.TWO, Suit.SPADE),
        new Card(Rank.TWO, Suit.HEART),
        new Card(Rank.THREE, Suit.HEART),
        new Card(Rank.FIVE, Suit.DIAMOND)
      ],
      [
        null,
        new Card(Rank.ACE, Suit.DIAMOND),
        new Card(Rank.KING, Suit.DIAMOND),
        new Card(Rank.QUEEN, Suit.DIAMOND),
        new Card(Rank.TEN, Suit.DIAMOND),
        new Card(Rank.NINE, Suit.DIAMOND),
        new Card(Rank.EIGHT, Suit.DIAMOND),
        new Card(Rank.SEVEN, Suit.DIAMOND),
        new Card(Rank.SIX, Suit.DIAMOND),
        null
      ]
    ];
  }

  public removeChip(position: Position) {
    const slot = this.slots[position.row][position.col];
    if (!(slot instanceof Chip)) {
      throw Error(
        `There is no chip to be removed at position: ${position.toString()}`
      );
    }

    this.slots[position.row][position.col] =
      DEFAULT_BOARD_STATE[position.row][position.col];
  }

  public placeChip(chip: Chip, card: Card, position: Position) {
    this.validateChipCanBePlaced(card, position);

    this.slots[position.row][position.col] = chip;
  }

  private validateChipCanBePlaced(playerCard: Card, position: Position) {
    const { row, col } = position;
    const elementAtPos = this.slots[row][col];
    if (elementAtPos instanceof Chip) {
      throw Error(`Chip already placed at position: ${position.toString()}`);
    }

    // check if its a corner
    if (elementAtPos === null) {
      throw Error(`Card cannot be placed at four corners`);
    }

    // Either the card should match or it should be two eyed jack
    if (
      elementAtPos instanceof Card &&
      (playerCard.isTwoEyedJack() || playerCard.matches(elementAtPos))
    ) {
      return;
    }

    throw Error(
      `Card at: ${row}, ${col} in deck is: ${
        elementAtPos == null ? "corner" : elementAtPos.toString()
      }, and player's card is ${playerCard.toString()}`
    );
  }

  public verifyBoard() {
    const deck = new Deck();

    for (let row = 0; row < this.slots.length; row = row + 1) {
      const rowCards = this.slots[row];
      for (let col = 0; col < rowCards.length; col = col + 1) {
        const boardCard = rowCards[col];
        if (boardCard == null) {
          continue;
        }
        for (let i = 0; i < deck.cards.length; i++) {
          const deckCard = deck.cards[i];
          if (
            boardCard instanceof Card &&
            deckCard.suit === boardCard.suit &&
            deckCard.rank === boardCard.rank
          ) {
            deck.cards.splice(i, 1);
            break;
          }
        }
      }
    }

    console.log(deck);
  }

  public displayBoard(canvas: HTMLCanvasElement) {
    const ctx: CanvasRenderingContext2D | null = canvas.getContext("2d");
    if (ctx === null) {
      throw Error("Unable to get CanvasRenderingContext2D");
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let row = 0; row < this.slots.length; row = row + 1) {
      const rowCards = this.slots[row];
      for (let col = 0; col < rowCards.length; col = col + 1) {
        const boardElement = rowCards[col];
        const position = new Position(row, col);
        if (boardElement == null) {
          this.drawCorner(ctx, position);
        } else if (boardElement instanceof Chip) {
          this.drawChip(ctx, boardElement, position);
        } else if (boardElement instanceof Card) {
          this.drawCard(ctx, boardElement, position);
        } else {
          throw Error(`Invalid board element: ${boardElement}`);
        }
      }
    }
  }

  private drawCorner(ctx: CanvasRenderingContext2D, position: Position) {
    this.drawBorderedRect(ctx, position, "#eee");
  }

  private drawChip(
    ctx: CanvasRenderingContext2D,
    chip: Chip,
    position: Position
  ) {
    const card = DEFAULT_BOARD_STATE[position.row][position.col];
    if (!(card instanceof Card)) {
      throw Error(`Card not found at position: ${position.toString()}`);
    }

    this.drawCard(ctx, card, position);

    const halfWidth = GAME_CONFIG.CARD_SIZE / 2;
    const y = position.row * GAME_CONFIG.CARD_SIZE + halfWidth;
    const x = position.col * GAME_CONFIG.CARD_SIZE + halfWidth;

    if (chip.isInSequence()) {
      ctx.fillStyle = "#000";
      ctx.beginPath();
      ctx.arc(x, y, GAME_CONFIG.CHIP_RADIUS, 0, 2 * Math.PI, false);
      ctx.fill();
    }

    ctx.fillStyle = chip.color;
    ctx.beginPath();
    const radius = chip.isInSequence()
      ? GAME_CONFIG.CHIP_RADIUS / 2
      : GAME_CONFIG.CHIP_RADIUS;
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fill();
  }

  private drawCard(
    ctx: CanvasRenderingContext2D,
    card: Card,
    position: Position
  ) {
    const thickness = 1;
    const x = position.col * GAME_CONFIG.CARD_SIZE;
    const y = position.row * GAME_CONFIG.CARD_SIZE;

    ctx.fillStyle = "#000";
    ctx.rect(x, y, GAME_CONFIG.CARD_SIZE, GAME_CONFIG.CARD_SIZE);
    ctx.stroke();

    ctx.fillStyle = "#000";
    ctx.font = GAME_CONFIG.RANK_FONT_FAMILY;
    const rankX = x + GAME_CONFIG.RANK_X_OFFSET;
    const rankY = y + GAME_CONFIG.RANK_Y_OFFSET;
    ctx.fillText(`${card.rankDisplay()}`, rankX, rankY);

    ctx.font = GAME_CONFIG.INDEX_FONT_FAMILY;
    const indexX = x + GAME_CONFIG.INDEX_X_OFFSET;
    const indexY = y + GAME_CONFIG.INDEX_Y_OFFSET;
    ctx.fillText(`(${position.row}, ${position.col})`, indexX, indexY);

    ctx.fillStyle = card.suitColor();
    ctx.font = GAME_CONFIG.SUIT_FONT_FAMILY;
    ctx.fillText(
      `${card.suitDisplay()}`,
      x + GAME_CONFIG.SUIT_X_OFFSET,
      y + GAME_CONFIG.SUIT_Y_OFFSET
    );
    //console.log(`card: ${card.toString()} position x: ${x}, y: ${y}`);
  }

  private drawBorderedRect(
    ctx: CanvasRenderingContext2D,
    position: Position,
    color: string
  ) {
    const y = position.row * GAME_CONFIG.CARD_SIZE;
    const x = position.col * GAME_CONFIG.CARD_SIZE;
    const width = GAME_CONFIG.CARD_SIZE;
    const thickness = 1;

    ctx.fillStyle = "#000";
    ctx.fillRect(x, y, width, width);

    ctx.fillStyle = color;
    ctx.fillRect(
      x + thickness,
      y + thickness,
      width - thickness * 2,
      width - thickness * 2
    );
  }

  public cloneSlots(): (Card | null | Chip)[][] {
    const slots: (Card | null | Chip)[][] = [];
    this.slots.map(row => {
      slots.push(row.map(col => (col === null ? col : col.clone())));
    });

    return slots;
  }
}

export const DEFAULT_BOARD_STATE = [
  [
    null,
    new Card(Rank.TWO, Suit.SPADE),
    new Card(Rank.THREE, Suit.SPADE),
    new Card(Rank.FOUR, Suit.SPADE),
    new Card(Rank.FIVE, Suit.SPADE),
    new Card(Rank.SIX, Suit.SPADE),
    new Card(Rank.SEVEN, Suit.SPADE),
    new Card(Rank.EIGHT, Suit.SPADE),
    new Card(Rank.NINE, Suit.SPADE),
    null
  ],
  [
    new Card(Rank.SIX, Suit.CLUB),
    new Card(Rank.FIVE, Suit.CLUB),
    new Card(Rank.FOUR, Suit.CLUB),
    new Card(Rank.THREE, Suit.CLUB),
    new Card(Rank.TWO, Suit.CLUB),
    new Card(Rank.ACE, Suit.HEART),
    new Card(Rank.KING, Suit.HEART),
    new Card(Rank.QUEEN, Suit.HEART),
    new Card(Rank.TEN, Suit.HEART),
    new Card(Rank.TEN, Suit.SPADE)
  ],
  [
    new Card(Rank.SEVEN, Suit.CLUB),
    new Card(Rank.ACE, Suit.SPADE),
    new Card(Rank.TWO, Suit.DIAMOND),
    new Card(Rank.THREE, Suit.DIAMOND),
    new Card(Rank.FOUR, Suit.DIAMOND),
    new Card(Rank.FIVE, Suit.DIAMOND),
    new Card(Rank.SIX, Suit.DIAMOND),
    new Card(Rank.SEVEN, Suit.DIAMOND),
    new Card(Rank.NINE, Suit.HEART),
    new Card(Rank.QUEEN, Suit.SPADE)
  ],
  [
    new Card(Rank.EIGHT, Suit.CLUB),
    new Card(Rank.KING, Suit.SPADE),
    new Card(Rank.SIX, Suit.CLUB),
    new Card(Rank.FIVE, Suit.CLUB),
    new Card(Rank.FOUR, Suit.CLUB),
    new Card(Rank.THREE, Suit.CLUB),
    new Card(Rank.TWO, Suit.CLUB),
    new Card(Rank.EIGHT, Suit.DIAMOND),
    new Card(Rank.EIGHT, Suit.HEART),
    new Card(Rank.KING, Suit.SPADE)
  ],
  [
    new Card(Rank.NINE, Suit.CLUB),
    new Card(Rank.QUEEN, Suit.SPADE),
    new Card(Rank.SEVEN, Suit.CLUB),
    new Card(Rank.SIX, Suit.HEART),
    new Card(Rank.FIVE, Suit.HEART),
    new Card(Rank.FOUR, Suit.HEART),
    new Card(Rank.ACE, Suit.HEART),
    new Card(Rank.NINE, Suit.DIAMOND),
    new Card(Rank.SEVEN, Suit.HEART),
    new Card(Rank.ACE, Suit.SPADE)
  ],
  [
    new Card(Rank.TEN, Suit.CLUB),
    new Card(Rank.TEN, Suit.SPADE),
    new Card(Rank.EIGHT, Suit.CLUB),
    new Card(Rank.SEVEN, Suit.HEART),
    new Card(Rank.TWO, Suit.HEART),
    new Card(Rank.THREE, Suit.HEART),
    new Card(Rank.KING, Suit.HEART),
    new Card(Rank.TEN, Suit.DIAMOND),
    new Card(Rank.SIX, Suit.HEART),
    new Card(Rank.TWO, Suit.DIAMOND)
  ],
  [
    new Card(Rank.QUEEN, Suit.CLUB),
    new Card(Rank.NINE, Suit.SPADE),
    new Card(Rank.NINE, Suit.CLUB),
    new Card(Rank.EIGHT, Suit.HEART),
    new Card(Rank.NINE, Suit.HEART),
    new Card(Rank.TEN, Suit.HEART),
    new Card(Rank.QUEEN, Suit.HEART),
    new Card(Rank.QUEEN, Suit.DIAMOND),
    new Card(Rank.FIVE, Suit.HEART),
    new Card(Rank.THREE, Suit.DIAMOND)
  ],
  [
    new Card(Rank.KING, Suit.CLUB),
    new Card(Rank.EIGHT, Suit.SPADE),
    new Card(Rank.TEN, Suit.CLUB),
    new Card(Rank.QUEEN, Suit.CLUB),
    new Card(Rank.KING, Suit.CLUB),
    new Card(Rank.ACE, Suit.CLUB),
    new Card(Rank.ACE, Suit.DIAMOND),
    new Card(Rank.KING, Suit.DIAMOND),
    new Card(Rank.FOUR, Suit.HEART),
    new Card(Rank.FOUR, Suit.DIAMOND)
  ],
  [
    new Card(Rank.ACE, Suit.CLUB),
    new Card(Rank.SEVEN, Suit.SPADE),
    new Card(Rank.SIX, Suit.SPADE),
    new Card(Rank.FIVE, Suit.SPADE),
    new Card(Rank.FOUR, Suit.SPADE),
    new Card(Rank.THREE, Suit.SPADE),
    new Card(Rank.TWO, Suit.SPADE),
    new Card(Rank.TWO, Suit.HEART),
    new Card(Rank.THREE, Suit.HEART),
    new Card(Rank.FIVE, Suit.DIAMOND)
  ],
  [
    null,
    new Card(Rank.ACE, Suit.DIAMOND),
    new Card(Rank.KING, Suit.DIAMOND),
    new Card(Rank.QUEEN, Suit.DIAMOND),
    new Card(Rank.TEN, Suit.DIAMOND),
    new Card(Rank.NINE, Suit.DIAMOND),
    new Card(Rank.EIGHT, Suit.DIAMOND),
    new Card(Rank.SEVEN, Suit.DIAMOND),
    new Card(Rank.SIX, Suit.DIAMOND),
    null
  ]
];
