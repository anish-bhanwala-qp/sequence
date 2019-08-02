import Game from "./Game";
import Computer from "./Computer";
import Computer2 from "./Computer2";
import ManualUser from "./ManualUser";

const game = new Game("computer2", Computer, "Computer1", Computer, true);
// console.log(game);

// @ts-ignore
window.Game = Game;
// @ts-ignore
window.ManualUser = ManualUser;
// @ts-ignore
window.Computer = Computer;
