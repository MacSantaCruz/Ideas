import { Participant } from './participant.model';

export class Game {
    _id: string;
    winner: Participant;
    loser: Participant[];
    type: string;
}