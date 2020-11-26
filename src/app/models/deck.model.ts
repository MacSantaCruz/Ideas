import { StringMap } from '@angular/compiler/src/compiler_facade_interface'

export class Deck {
    _id: string;
    name: string;
    color: string[];
    archType: string;
    format: string;
    win_count:number;
    loss_count:number;
}