import Game from "./Game";
import Deck from "./Deck";
import Board from "./Board";
import GAME_CONFIG from "./GAME_CONFIG";

const canvas = createCanvas();
const h1 = createResultHeading();
const game = new Game(canvas, h1);
console.log(game);

function createResultHeading() {
  const h1 = document.createElement("h1");
  h1.id = "resultHeading";
  h1.style.display = "none";
  h1.style.fontSize = "100px";
  h1.style.cssFloat = "right";
  appendElementToBody(h1);

  return h1;
}

function createCanvas() {
  const canvas = document.createElement("canvas");
  canvas.width = GAME_CONFIG.CANVAS_WIDTH;
  canvas.height = GAME_CONFIG.CANVAS_HEIGHT;
  canvas.id = "canvasId";

  appendElementToBody(canvas);
  return canvas;
}

function appendElementToBody(element: any) {
  const body = document.getElementsByTagName("body")[0];
  body.appendChild(element);
}
