import Game from "./Game";
import Deck from "./Deck";
import Board from "./Board";

const game = new Game();
console.log(game);

console.log('testing', new Deck(), new Board().verifyBoard());

