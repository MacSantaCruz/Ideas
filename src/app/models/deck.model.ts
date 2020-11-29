import { StringMap } from '@angular/compiler/src/compiler_facade_interface'

export class Deck {
    [key: string]: any;
    _id: string;
    name: string;
    color: string[];
    archtype: string;
    format: string;
    win_count:number;
    loss_count:number;

    constructor(){
        this.name = null!;
        this.color = null!;
        this.archtype = null!;
        this.format = null!;
    }

}