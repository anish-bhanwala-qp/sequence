import Game from "./Game";
import Computer from "./Computer";
import ManualUser from "./ManualUser";

// const game = new Game("computer2", Computer, "Computer1", Computer, true).start();
// game.start();
// console.log(game);

// @ts-ignore
window.Game = Game;
// @ts-ignore
window.ManualUser = ManualUser;
// @ts-ignore
window.Computer = Computer;
