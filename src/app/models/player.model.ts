import { Game } from './game.model';

export class Player{
    _id: string;
    name: string;
    wins: Game[];
    losses: Game[];
}