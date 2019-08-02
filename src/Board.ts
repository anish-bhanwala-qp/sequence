import Card from "./Card";
import Rank from "./Rank";
import Suit from "./Suit";
import Deck from "./Deck";
import Chip from "./Chip";
import Position from "./Position";
import GAME_CONFIG from "./GAME_CONFIG";
import Slot from "./Slot";

export default class Board {
  readonly slots: Slot[][];
  constructor() {
    this.slots = [
      [
        new Slot(true),
        new Slot(false, new Card(Rank.TWO, Suit.SPADE)),
        new Slot(false, new Card(Rank.THREE, Suit.SPADE)),
        new Slot(false, new Card(Rank.FOUR, Suit.SPADE)),
        new Slot(false, new Card(Rank.FIVE, Suit.SPADE)),
        new Slot(false, new Card(Rank.SIX, Suit.SPADE)),
        new Slot(false, new Card(Rank.SEVEN, Suit.SPADE)),
        new Slot(false, new Card(Rank.EIGHT, Suit.SPADE)),
        new Slot(false, new Card(Rank.NINE, Suit.SPADE)),
        new Slot(true)
      ],
      [
        new Slot(false, new Card(Rank.SIX, Suit.CLUB)),
        new Slot(false, new Card(Rank.FIVE, Suit.CLUB)),
        new Slot(false, new Card(Rank.FOUR, Suit.CLUB)),
        new Slot(false, new Card(Rank.THREE, Suit.CLUB)),
        new Slot(false, new Card(Rank.TWO, Suit.CLUB)),
        new Slot(false, new Card(Rank.ACE, Suit.HEART)),
        new Slot(false, new Card(Rank.KING, Suit.HEART)),
        new Slot(false, new Card(Rank.QUEEN, Suit.HEART)),
        new Slot(false, new Card(Rank.TEN, Suit.HEART)),
        new Slot(false, new Card(Rank.TEN, Suit.SPADE))
      ],
      [
        new Slot(false, new Card(Rank.SEVEN, Suit.CLUB)),
        new Slot(false, new Card(Rank.ACE, Suit.SPADE)),
        new Slot(false, new Card(Rank.TWO, Suit.DIAMOND)),
        new Slot(false, new Card(Rank.THREE, Suit.DIAMOND)),
        new Slot(false, new Card(Rank.FOUR, Suit.DIAMOND)),
        new Slot(false, new Card(Rank.FIVE, Suit.DIAMOND)),
        new Slot(false, new Card(Rank.SIX, Suit.DIAMOND)),
        new Slot(false, new Card(Rank.SEVEN, Suit.DIAMOND)),
        new Slot(false, new Card(Rank.NINE, Suit.HEART)),
        new Slot(false, new Card(Rank.QUEEN, Suit.SPADE))
      ],
      [
        new Slot(false, new Card(Rank.EIGHT, Suit.CLUB)),
        new Slot(false, new Card(Rank.KING, Suit.SPADE)),
        new Slot(false, new Card(Rank.SIX, Suit.CLUB)),
        new Slot(false, new Card(Rank.FIVE, Suit.CLUB)),
        new Slot(false, new Card(Rank.FOUR, Suit.CLUB)),
        new Slot(false, new Card(Rank.THREE, Suit.CLUB)),
        new Slot(false, new Card(Rank.TWO, Suit.CLUB)),
        new Slot(false, new Card(Rank.EIGHT, Suit.DIAMOND)),
        new Slot(false, new Card(Rank.EIGHT, Suit.HEART)),
        new Slot(false, new Card(Rank.KING, Suit.SPADE))
      ],
      [
        new Slot(false, new Card(Rank.NINE, Suit.CLUB)),
        new Slot(false, new Card(Rank.QUEEN, Suit.SPADE)),
        new Slot(false, new Card(Rank.SEVEN, Suit.CLUB)),
        new Slot(false, new Card(Rank.SIX, Suit.HEART)),
        new Slot(false, new Card(Rank.FIVE, Suit.HEART)),
        new Slot(false, new Card(Rank.FOUR, Suit.HEART)),
        new Slot(false, new Card(Rank.ACE, Suit.HEART)),
        new Slot(false, new Card(Rank.NINE, Suit.DIAMOND)),
        new Slot(false, new Card(Rank.SEVEN, Suit.HEART)),
        new Slot(false, new Card(Rank.ACE, Suit.SPADE))
      ],
      [
        new Slot(false, new Card(Rank.TEN, Suit.CLUB)),
        new Slot(false, new Card(Rank.TEN, Suit.SPADE)),
        new Slot(false, new Card(Rank.EIGHT, Suit.CLUB)),
        new Slot(false, new Card(Rank.SEVEN, Suit.HEART)),
        new Slot(false, new Card(Rank.TWO, Suit.HEART)),
        new Slot(false, new Card(Rank.THREE, Suit.HEART)),
        new Slot(false, new Card(Rank.KING, Suit.HEART)),
        new Slot(false, new Card(Rank.TEN, Suit.DIAMOND)),
        new Slot(false, new Card(Rank.SIX, Suit.HEART)),
        new Slot(false, new Card(Rank.TWO, Suit.DIAMOND))
      ],
      [
        new Slot(false, new Card(Rank.QUEEN, Suit.CLUB)),
        new Slot(false, new Card(Rank.NINE, Suit.SPADE)),
        new Slot(false, new Card(Rank.NINE, Suit.CLUB)),
        new Slot(false, new Card(Rank.EIGHT, Suit.HEART)),
        new Slot(false, new Card(Rank.NINE, Suit.HEART)),
        new Slot(false, new Card(Rank.TEN, Suit.HEART)),
        new Slot(false, new Card(Rank.QUEEN, Suit.HEART)),
        new Slot(false, new Card(Rank.QUEEN, Suit.DIAMOND)),
        new Slot(false, new Card(Rank.FIVE, Suit.HEART)),
        new Slot(false, new Card(Rank.THREE, Suit.DIAMOND))
      ],
      [
        new Slot(false, new Card(Rank.KING, Suit.CLUB)),
        new Slot(false, new Card(Rank.EIGHT, Suit.SPADE)),
        new Slot(false, new Card(Rank.TEN, Suit.CLUB)),
        new Slot(false, new Card(Rank.QUEEN, Suit.CLUB)),
        new Slot(false, new Card(Rank.KING, Suit.CLUB)),
        new Slot(false, new Card(Rank.ACE, Suit.CLUB)),
        new Slot(false, new Card(Rank.ACE, Suit.DIAMOND)),
        new Slot(false, new Card(Rank.KING, Suit.DIAMOND)),
        new Slot(false, new Card(Rank.FOUR, Suit.HEART)),
        new Slot(false, new Card(Rank.FOUR, Suit.DIAMOND))
      ],
      [
        new Slot(false, new Card(Rank.ACE, Suit.CLUB)),
        new Slot(false, new Card(Rank.SEVEN, Suit.SPADE)),
        new Slot(false, new Card(Rank.SIX, Suit.SPADE)),
        new Slot(false, new Card(Rank.FIVE, Suit.SPADE)),
        new Slot(false, new Card(Rank.FOUR, Suit.SPADE)),
        new Slot(false, new Card(Rank.THREE, Suit.SPADE)),
        new Slot(false, new Card(Rank.TWO, Suit.SPADE)),
        new Slot(false, new Card(Rank.TWO, Suit.HEART)),
        new Slot(false, new Card(Rank.THREE, Suit.HEART)),
        new Slot(false, new Card(Rank.FIVE, Suit.DIAMOND))
      ],
      [
        new Slot(true),
        new Slot(false, new Card(Rank.ACE, Suit.DIAMOND)),
        new Slot(false, new Card(Rank.KING, Suit.DIAMOND)),
        new Slot(false, new Card(Rank.QUEEN, Suit.DIAMOND)),
        new Slot(false, new Card(Rank.TEN, Suit.DIAMOND)),
        new Slot(false, new Card(Rank.NINE, Suit.DIAMOND)),
        new Slot(false, new Card(Rank.EIGHT, Suit.DIAMOND)),
        new Slot(false, new Card(Rank.SEVEN, Suit.DIAMOND)),
        new Slot(false, new Card(Rank.SIX, Suit.DIAMOND)),
        new Slot(true)
      ]
    ];
  }

  public removeChip(position: Position) {
    const slot = this.slots[position.row][position.col];
    if (slot.chip == null) {
      throw Error(
        `There is no chip to be removed at position: ${position.toString()}`
      );
    }

    slot.removeChip();
  }

  public placeChip(chip: Chip, card: Card, position: Position) {
    this.validateChipCanBePlaced(card, position);

    this.slots[position.row][position.col].placeChip(chip);
  }

  private validateChipCanBePlaced(playerCard: Card, position: Position) {
    const { row, col } = position;
    const slot = this.slots[row][col];
    if (slot.chip != null) {
      throw Error(`Chip already placed at position: ${position.toString()}`);
    }

    // check if its a corner
    if (slot.isCorner) {
      throw Error(`Card cannot be placed at four corners`);
    }

    // Either the card should match or it should be two eyed jack
    if (
      slot.card != null &&
      (playerCard.isTwoEyedJack() || playerCard.matches(slot.card))
    ) {
      return;
    }

    console.log(slot);

    throw Error(
      `Card at: ${row}, ${col} in deck is: ${
        slot.card == null ? "corner" : slot.card.toString()
      }, and player's card is ${playerCard.toString()}`
    );
  }

  public verifyBoard() {
    const deck = new Deck();

    for (let row = 0; row < this.slots.length; row = row + 1) {
      const slotsRow = this.slots[row];
      for (let col = 0; col < slotsRow.length; col = col + 1) {
        const slot = slotsRow[col];
        if (slot.isCorner) {
          continue;
        }
        for (let i = 0; i < deck.cards.length; i++) {
          const deckCard = deck.cards[i];
          if (slot.isEmptySlot() && slot.hasMatchingCard(deckCard)) {
            deck.cards.splice(i, 1);
            break;
          }
        }
      }
    }

    console.log(deck);
  }

  public displayBoard(ctx: CanvasRenderingContext2D) {
    ctx.clearRect(0, 0, GAME_CONFIG.CANVAS_WIDTH, GAME_CONFIG.CANVAS_HEIGHT);
    for (let row = 0; row < this.slots.length; row = row + 1) {
      const slotsRow = this.slots[row];
      for (let col = 0; col < slotsRow.length; col = col + 1) {
        const slot = slotsRow[col];
        const position = new Position(row, col);
        if (slot.isCorner) {
          this.drawCorner(ctx, position);
        } else if (slot.chip != null) {
          this.drawChip(ctx, slot, position);
        } else if (slot.isEmptySlot()) {
          this.drawCard(ctx, slot, position);
        } else {
          throw Error(`Invalid board element: ${slot}`);
        }
      }
    }
  }

  private drawCorner(ctx: CanvasRenderingContext2D, position: Position) {
    this.drawBorderedRect(ctx, position, "#eee");
  }

  private drawChip(
    ctx: CanvasRenderingContext2D,
    slot: Slot,
    position: Position
  ) {
    if (slot.card == null || slot.chip == null) {
      throw Error(`Chip should be present at the slot: ${position.toString()}`);
    }

    this.drawCard(ctx, slot, position);

    const halfWidth = GAME_CONFIG.CARD_SIZE / 2;
    const y = position.row * GAME_CONFIG.CARD_SIZE + halfWidth;
    const x = position.col * GAME_CONFIG.CARD_SIZE + halfWidth;

    if (slot.chip.isInSequence()) {
      ctx.fillStyle = "#000";
      ctx.beginPath();
      ctx.arc(x, y, GAME_CONFIG.CHIP_RADIUS, 0, 2 * Math.PI, false);
      ctx.fill();
    }

    ctx.fillStyle = slot.chip.color;
    ctx.beginPath();
    const radius = slot.chip.isInSequence()
      ? GAME_CONFIG.CHIP_RADIUS / 2
      : GAME_CONFIG.CHIP_RADIUS;
    ctx.arc(x, y, radius, 0, 2 * Math.PI, false);
    ctx.fill();
  }

  private drawCard(
    ctx: CanvasRenderingContext2D,
    slot: Slot,
    position: Position
  ) {
    if (slot.card == null) {
      throw Error(`Card should be present at slot: ${position.toString()}`);
    }
    const card = slot.card;
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

  public cloneSlots(): Slot[][] {
    const slots: Slot[][] = [];
    this.slots.map(row => {
      slots.push(row.map(slot => slot.clone()));
    });

    return slots;
  }
}

export const DEFAULT_BOARD_STATE = [
  [
    new Slot(true),
    new Slot(false, new Card(Rank.TWO, Suit.SPADE)),
    new Slot(false, new Card(Rank.THREE, Suit.SPADE)),
    new Slot(false, new Card(Rank.FOUR, Suit.SPADE)),
    new Slot(false, new Card(Rank.FIVE, Suit.SPADE)),
    new Slot(false, new Card(Rank.SIX, Suit.SPADE)),
    new Slot(false, new Card(Rank.SEVEN, Suit.SPADE)),
    new Slot(false, new Card(Rank.EIGHT, Suit.SPADE)),
    new Slot(false, new Card(Rank.NINE, Suit.SPADE)),
    new Slot(true)
  ],
  [
    new Slot(false, new Card(Rank.SIX, Suit.CLUB)),
    new Slot(false, new Card(Rank.FIVE, Suit.CLUB)),
    new Slot(false, new Card(Rank.FOUR, Suit.CLUB)),
    new Slot(false, new Card(Rank.THREE, Suit.CLUB)),
    new Slot(false, new Card(Rank.TWO, Suit.CLUB)),
    new Slot(false, new Card(Rank.ACE, Suit.HEART)),
    new Slot(false, new Card(Rank.KING, Suit.HEART)),
    new Slot(false, new Card(Rank.QUEEN, Suit.HEART)),
    new Slot(false, new Card(Rank.TEN, Suit.HEART)),
    new Slot(false, new Card(Rank.TEN, Suit.SPADE))
  ],
  [
    new Slot(false, new Card(Rank.SEVEN, Suit.CLUB)),
    new Slot(false, new Card(Rank.ACE, Suit.SPADE)),
    new Slot(false, new Card(Rank.TWO, Suit.DIAMOND)),
    new Slot(false, new Card(Rank.THREE, Suit.DIAMOND)),
    new Slot(false, new Card(Rank.FOUR, Suit.DIAMOND)),
    new Slot(false, new Card(Rank.FIVE, Suit.DIAMOND)),
    new Slot(false, new Card(Rank.SIX, Suit.DIAMOND)),
    new Slot(false, new Card(Rank.SEVEN, Suit.DIAMOND)),
    new Slot(false, new Card(Rank.NINE, Suit.HEART)),
    new Slot(false, new Card(Rank.QUEEN, Suit.SPADE))
  ],
  [
    new Slot(false, new Card(Rank.EIGHT, Suit.CLUB)),
    new Slot(false, new Card(Rank.KING, Suit.SPADE)),
    new Slot(false, new Card(Rank.SIX, Suit.CLUB)),
    new Slot(false, new Card(Rank.FIVE, Suit.CLUB)),
    new Slot(false, new Card(Rank.FOUR, Suit.CLUB)),
    new Slot(false, new Card(Rank.THREE, Suit.CLUB)),
    new Slot(false, new Card(Rank.TWO, Suit.CLUB)),
    new Slot(false, new Card(Rank.EIGHT, Suit.DIAMOND)),
    new Slot(false, new Card(Rank.EIGHT, Suit.HEART)),
    new Slot(false, new Card(Rank.KING, Suit.SPADE))
  ],
  [
    new Slot(false, new Card(Rank.NINE, Suit.CLUB)),
    new Slot(false, new Card(Rank.QUEEN, Suit.SPADE)),
    new Slot(false, new Card(Rank.SEVEN, Suit.CLUB)),
    new Slot(false, new Card(Rank.SIX, Suit.HEART)),
    new Slot(false, new Card(Rank.FIVE, Suit.HEART)),
    new Slot(false, new Card(Rank.FOUR, Suit.HEART)),
    new Slot(false, new Card(Rank.ACE, Suit.HEART)),
    new Slot(false, new Card(Rank.NINE, Suit.DIAMOND)),
    new Slot(false, new Card(Rank.SEVEN, Suit.HEART)),
    new Slot(false, new Card(Rank.ACE, Suit.SPADE))
  ],
  [
    new Slot(false, new Card(Rank.TEN, Suit.CLUB)),
    new Slot(false, new Card(Rank.TEN, Suit.SPADE)),
    new Slot(false, new Card(Rank.EIGHT, Suit.CLUB)),
    new Slot(false, new Card(Rank.SEVEN, Suit.HEART)),
    new Slot(false, new Card(Rank.TWO, Suit.HEART)),
    new Slot(false, new Card(Rank.THREE, Suit.HEART)),
    new Slot(false, new Card(Rank.KING, Suit.HEART)),
    new Slot(false, new Card(Rank.TEN, Suit.DIAMOND)),
    new Slot(false, new Card(Rank.SIX, Suit.HEART)),
    new Slot(false, new Card(Rank.TWO, Suit.DIAMOND))
  ],
  [
    new Slot(false, new Card(Rank.QUEEN, Suit.CLUB)),
    new Slot(false, new Card(Rank.NINE, Suit.SPADE)),
    new Slot(false, new Card(Rank.NINE, Suit.CLUB)),
    new Slot(false, new Card(Rank.EIGHT, Suit.HEART)),
    new Slot(false, new Card(Rank.NINE, Suit.HEART)),
    new Slot(false, new Card(Rank.TEN, Suit.HEART)),
    new Slot(false, new Card(Rank.QUEEN, Suit.HEART)),
    new Slot(false, new Card(Rank.QUEEN, Suit.DIAMOND)),
    new Slot(false, new Card(Rank.FIVE, Suit.HEART)),
    new Slot(false, new Card(Rank.THREE, Suit.DIAMOND))
  ],
  [
    new Slot(false, new Card(Rank.KING, Suit.CLUB)),
    new Slot(false, new Card(Rank.EIGHT, Suit.SPADE)),
    new Slot(false, new Card(Rank.TEN, Suit.CLUB)),
    new Slot(false, new Card(Rank.QUEEN, Suit.CLUB)),
    new Slot(false, new Card(Rank.KING, Suit.CLUB)),
    new Slot(false, new Card(Rank.ACE, Suit.CLUB)),
    new Slot(false, new Card(Rank.ACE, Suit.DIAMOND)),
    new Slot(false, new Card(Rank.KING, Suit.DIAMOND)),
    new Slot(false, new Card(Rank.FOUR, Suit.HEART)),
    new Slot(false, new Card(Rank.FOUR, Suit.DIAMOND))
  ],
  [
    new Slot(false, new Card(Rank.ACE, Suit.CLUB)),
    new Slot(false, new Card(Rank.SEVEN, Suit.SPADE)),
    new Slot(false, new Card(Rank.SIX, Suit.SPADE)),
    new Slot(false, new Card(Rank.FIVE, Suit.SPADE)),
    new Slot(false, new Card(Rank.FOUR, Suit.SPADE)),
    new Slot(false, new Card(Rank.THREE, Suit.SPADE)),
    new Slot(false, new Card(Rank.TWO, Suit.SPADE)),
    new Slot(false, new Card(Rank.TWO, Suit.HEART)),
    new Slot(false, new Card(Rank.THREE, Suit.HEART)),
    new Slot(false, new Card(Rank.FIVE, Suit.DIAMOND))
  ],
  [
    new Slot(true),
    new Slot(false, new Card(Rank.ACE, Suit.DIAMOND)),
    new Slot(false, new Card(Rank.KING, Suit.DIAMOND)),
    new Slot(false, new Card(Rank.QUEEN, Suit.DIAMOND)),
    new Slot(false, new Card(Rank.TEN, Suit.DIAMOND)),
    new Slot(false, new Card(Rank.NINE, Suit.DIAMOND)),
    new Slot(false, new Card(Rank.EIGHT, Suit.DIAMOND)),
    new Slot(false, new Card(Rank.SEVEN, Suit.DIAMOND)),
    new Slot(false, new Card(Rank.SIX, Suit.DIAMOND)),
    new Slot(true)
  ]
];
