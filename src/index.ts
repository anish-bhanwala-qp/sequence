import Game from "./Game";
import GAME_CONFIG from "./GAME_CONFIG";

const canvas = createCanvas();
const h1 = createResultHeading();
const player1Display = createPlayerCardsHolder("player1Id");
const player2Display = createPlayerCardsHolder("player2Id");

const game = new Game(canvas, h1, player1Display, player2Display);
console.log(game);

function createResultHeading() {
  const h1 = document.createElement("h1");
  h1.id = "resultHeading";
  h1.style.display = "none";
  h1.style.fontSize = "50px";
  h1.style.cssFloat = "right";
  appendElementToBody(h1);

  return h1;
}

function createPlayerCardsHolder(id: string) {
  const div = document.createElement("div");
  div.id = id;
  div.style.fontSize = "18px";
  appendElementToBody(div);

  return div;
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
