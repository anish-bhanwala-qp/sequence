"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = __importDefault(require("./Game"));
var Computer_1 = __importDefault(require("./Computer"));
var ManualUser_1 = __importDefault(require("./ManualUser"));
// const game = new Game("computer2", Computer, "ManualUser", ManualUser, true).start();
// game.start();
// console.log(game);
// @ts-ignore
window.Game = Game_1.default;
// @ts-ignore
window.ManualUser = ManualUser_1.default;
// @ts-ignore
window.Computer = Computer_1.default;
//# sourceMappingURL=index.js.map