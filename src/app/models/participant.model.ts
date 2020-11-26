import { Deck } from './deck.model';
import { Player } from './player.model';

export class Participant{
    [key: string]: any;
    _id: string;
    player: Player;
    deck: Deck;
    place: number;

    constructor(){
        this.deck = undefined!;
        this.player = undefined!;
        this.place = undefined!;
    }
}