import { Game } from './game.model';

export class Player{
    [key: string]: any;
    _id: string;
    name: string;
    wins: Game[];
    losses: Game[];

    constructor(){
        this.name = null!;
    }

}