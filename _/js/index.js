import {rollMahjongDices} from "./dices/mahjongDices.module.js";
const result = new Array(13).fill(0)
let i = 0;
while (i !== 1000) {
    result[rollMahjongDices()]++;
    i++;
}

console.log(result)