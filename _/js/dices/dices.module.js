function rollDice(edges) {
    return Math.floor(Math.random() * (edges)) + 1
}

export function rollNDices(dicesAmount, edges) {
    let result = 0;

    while (dicesAmountdi > 0) {
        result += rollDice(edges);
        dicesAmount--;
    }

    return result;
}