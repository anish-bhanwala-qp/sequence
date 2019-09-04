/* *********** DO NOT WRITE CODE HERE, OUTSIDE (IIFE) ************************** */
const bot = (function () {
    const MoveType = Object.freeze({
        PLACE_CHIP: 1,
        REPLACE_DEAD_CARD: 2,
        REMOVE_CHIP: 3
    });
​
    const Suit = Object.freeze({
        SPADE: 1,
        CLUB: 2,
        DIAMOND: 3,
        HEART: 4
    });
​
    const Rank = Object.freeze({
        ACE: 1,
        TWO: 2,
        THREE: 3,
        FOUR: 4,
        FIVE: 5,
        SIX: 6,
        SEVEN: 7,
        EIGHT: 8,
        NINE: 9,
        TEN: 10,
        JACK: 11,
        QUEEN: 12,
        KING: 13
    });
​
    /*
    Arguments:
    1. boardSlots: 2 dimensional array where each element represents slot on the board
      The object structure is:
        {
          // It is true for the four corner slots
          isCorner: true;
          // It represents card at the slot.
          // It is undefined for four corners.
          // It has following structure:
          card: {
            suit: 1, // number between 1 - 4
            rank: 1, // number between 1 - 13
            twoEyedJack: false, // boolean represent if its a two eyed jack
            oneEyedJack: false // boolean represent if its a one eyed jack
          },
          // It represents a chip at the slot.
          // It is undefined for four corners or if chip is not placed at this slot.
          // It has following structure.
          chip: {
            // string representing color of the chip
            color: "blue",
            // boolean, always true
            isChip: true,
            // boolean representing if this chip is part of a completed sequence
            inSequence: false
          }
        }
​
    2. playerCards: Array of 7 elements.
        Each element represents a card with following structure is:
        {
          // number between 1 - 4
          suit: 1,
          // number between 1 - 13
          rank: 1,
          // boolean represent if its a two eyed jack
          twoEyedJack: false,
          // boolean represent if its a one eyed jack
          oneEyedJack: false
         }
​
     3. yourChipColor: string representing color of your chip
​
    Returns:
      Move object representing your next move. It has following structure:
          {
            // number between 1- 3. 1 = Place chip, 2 = Replace dead card, 3 = Remove chip
            type: 1,
            // Card that you want to place in dead pile
            card: {suit: 1, rank: 1},
            // Position where you want to place or remove chip from.
            // It can be null if move 'type' is 2 i.e. replace dead card
            position: {row: 1, col: 1}
          }
  */
    function nextMove(boardSlots, playerCards, yourChipColor) {
        let card, position;
        for (let i = 0; i < playerCards.length; i++) {
            position = findCardPosition(boardSlots, playerCards[i], yourChipColor, playerCards);
​
            // This card is either dead or Jack, try another card
            if (position == null) {
                // handle dead card or jack
                continue;
            }
​
            if (playerCards[i].oneEyedJack) {
                return {
                    type: MoveType.REMOVE_CHIP,
                    card: position.card,
                    position: {row: position.row, col: position.col}
                };
            }
​
            return {
                type: MoveType.PLACE_CHIP,
                card: position.card,
                position: {row: position.row, col: position.col}
            };
        }
    }
​
    function findCardPosition(boardSlots, card, yourChipColor, playerCards) {
        let opponentPositions = [], inSequenceSlot = [];
        for (let row = 0; row < boardSlots.length; row++) {
            const slotsRow = boardSlots[row];
            for (let col = 0; col < slotsRow.length; col++) {
                const slot = slotsRow[col];
                // This slot is one of four corners, ignore
                if (slot.isCorner) {
                    continue;
                }
​
                // This slot is a chip and this chip is part of a sequence
                if (slot.chip != null && slot.chip.inSequence) {
                    // do something
                    inSequenceSlot.push(slot);
                    continue;
                }
​
                // This is opponent's chip
                if (slot.chip != null && slot.chip.color !== yourChipColor) {
                    // do something
                    opponentPositions.push(slot);
                    if (card.oneEyedJack) {
                        return {row: row, col: col, card: card};
                    }
                    continue;
                }
                if (card.twoEyedJack) {
                    if (slot.chip != null && slot.chip.color == yourChipColor) {
                        let nearEightPositions = getPossibleEightPositions(row, col, boardSlots);
                        if (nearEightPositions[0].obj.chip == null && !nearEightPositions[0].obj.isCorner) {
                            return {row: nearEightPositions[0].xpos, col: nearEightPositions[0].ypos, card: card};
                        }
                    }
                }
​
                // This is own chip
                if (slot.chip != null && slot.chip.color == yourChipColor) {
                    // do something
                    let nearEightPositions = getPossibleEightPositions(row, col, boardSlots);
                    nearEightPositions.map((item) => {
                        if (item.obj.chip != null && item.obj.chip.color == yourChipColor) {
                            let nearEightPositionsV2 =
                                getPossibleEightPositions(item.xpos, item.ypos, boardSlots);
                            let nearEightPositionsV3 =
                                nearEightPositionsV2.filter((item1) => item1.xpos !== row && item1.ypos !== col);
                            console.log(nearEightPositionsV3);
                            nearEightPositionsV3.map((item2) => {
                                if (item2 && item2.obj && item2.obj.card && item2.obj.card.suit && item2.obj.card.rank) {
                                    if (item2.obj.card.suit === card.suit &&
                                        item2.obj.card.rank === card.rank &&
                                        item2.obj.chip == null && !item2.obj.isCorner) {
                                        return {row: item2.xpos, col: item2.ypos, card: card};
                                    }
                                }
                            })
                        } else if (item && item.obj && item.obj.card && item.obj.card.suit && item.obj.card.rank) {
                            if (item.obj.card.suit === card.suit && item.obj.card.rank === card.rank &&
                                !item.obj.isCorner && item.obj.chip == null) {
                                return {row: item.xpos, col: item.ypos, card: card};
                            }
                        } else {
                            // tempStoredList.filter((slotRemoved) => slotRemoved.obj.card.suit !== slot.card.suit && slotRemoved.obj.card.rank !== slot.card.rank);
                            playerCards.map((cardIterate) => {
                                if (item && item.obj && item.obj.card && item.obj.card.suit && item.obj.card.rank) {
                                    if (item.obj.card.suit === cardIterate.suit &&
                                        item.obj.card.rank === cardIterate.rank &&
                                        !item.obj.isCorner && item.obj.chip == null) {
                                        return {row: item.xpos, col: item.ypos, card: cardIterate};
                                    }
                                }
                            })
                        }
                    });
                    continue;
                }
​
                // match card suit and rank
                if (
                    slot.chip == null &&  // There is not chip in this slot
                    slot.card != null &&
                    slot.card.suit === card.suit &&
                    slot.card.rank === card.rank
                ) {
                    return {row: row, col: col, card: card};
                }
            }
        }
        return null;
    }
​
    function getPossibleEightPositions(i, j, myArray) {
        let obj = {};
        let possibleEightPositions = [];
        let rowLimit = myArray.length - 1;
        let columnLimit = myArray[0].length - 1;
​
        for (var x = Math.max(0, i - 1); x <= Math.min(i + 1, rowLimit); x++) {
            for (var y = Math.max(0, j - 1); y <= Math.min(j + 1, columnLimit); y++) {
                if (x !== i || y !== j) {
                    possibleEightPositions.push({obj: myArray[x][y], xpos: x, ypos: y});
                }
            }
        }
        return possibleEightPositions;
    }
​
    /*function distance(lat1, lon1, lat2, lon2) {
        if ((lat1 == lat2) && (lon1 == lon2)) {
            return 0;
        }
        else {
            var radlat1 = Math.PI * lat1/180;
            var radlat2 = Math.PI * lat2/180;
            var theta = lon1-lon2;
            var radtheta = Math.PI * theta/180;
            var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 60 * 1.1515;
            return dist;
        }
    }*/
​
​
    return nextMove;
})();
/* *********** DO NOT WRITE CODE HERE, OUTSIDE (IIFE) ************************** */
// ManualUser Computer
new Game("Archa", bot, "computer", Computer, true).start();