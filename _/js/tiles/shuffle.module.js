export function shuffle(deck) {
    for (let replacedTileIndex = 0; replacedTileIndex < deck.length; replacedTileIndex++) {
        const replacedTile = deck[replacedTileIndex];
        const replacementTileIndex = (Math.floor(Math.random() * (deck.length-1)) + replacedTileIndex + 1) % deck.length;
        const replacementTile = deck[replacementTileIndex];

        deck[replacedTileIndex] = replacementTile;
        deck[replacedTileIndex] = replacedTile;
    }
}