import { Component, Input, OnInit, Output } from '@angular/core';
import { Deck } from 'src/app/models/deck.model';
import { Participant } from 'src/app/models/participant.model';
import { Player } from 'src/app/models/player.model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  selectedDeckId: string; 
  selectedPlayerId: string;
  @Input() deckList : Deck[] = [];
  @Input() playerList: Player[] = [];
  @Input() numberList: number[] = [];
  @Input() participant: Participant = null!;

  constructor() { }

  ngOnInit(): void {
    
  }

  playerChange(selected: string){
    this.participant.player = this.playerList.find(player => player._id === selected)!;
  }

  deckChange(selected: string){
    this.participant.deck = this.deckList.find(deck => deck._id === selected)!;
  }

  placementChange(selected:string){
    this.participant.place = Number(selected);
  }

}
