import {getMahjongDeck} from "./tiles/deck.module.js";
import {shuffle} from "./tiles/shuffle.module.js";

const deck = getMahjongDeck();
shuffle(deck)