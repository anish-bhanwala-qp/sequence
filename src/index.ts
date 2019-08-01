import Game from "./Game";
import Computer from "./Computer";
import Computer2 from "./Computer2";
import ManualUser from "./ManualUser";

const game = new Game("computer1", Computer, "Manual", ManualUser);
console.log(game);
