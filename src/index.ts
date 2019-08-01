import Game from "./Game";
import Deck from "./Deck";
import Board from "./Board";
import GAME_CONFIG from "./GAME_CONFIG";

const canvas = createCanvas();
const game = new Game(canvas);
console.log(game);

console.log("testing", new Deck(), new Board().verifyBoard());

new Board().displayBoard(canvas);
game.start();

function createCanvas() {
  const canvas = document.createElement("canvas");
  canvas.width = GAME_CONFIG.CANVAS_WIDTH;
  canvas.height = GAME_CONFIG.CANVAS_HEIGHT;
  canvas.id = "canvasId";

  const body = document.getElementsByTagName("body")[0];
  body.appendChild(canvas);

  return canvas;
}
