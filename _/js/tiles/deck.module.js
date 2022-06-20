import {tiles} from "./tiles.data.js";

export function getMahjongDeck() {
    const result = [];

    tiles.forEach(tile => {
        for( let i = 1; i <= tile.amount; i++) {
            const clonedTile = Object.assign({}, tile);
            delete clonedTile.amount;
            result.push(clonedTile);
        }
    })

    return result;
}