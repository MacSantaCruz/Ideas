import { Component, Input, OnInit, Output } from '@angular/core';
import { NbWindowRef, NbWindowService } from '@nebular/theme';
import { Deck } from 'src/app/models/deck.model';
import { Participant } from 'src/app/models/participant.model';
import { Player } from 'src/app/models/player.model';
import { DeckService } from 'src/app/services/deck.service';
import { PlayerService } from 'src/app/services/player.service';
import { InsertFormComponent } from 'src/app/shared/insert-form/insert-form.component';

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
  

  constructor(private windowService: NbWindowService, private deckService: DeckService, private playerService: PlayerService) { }

  ngOnInit(): void {
    this.deckService.deckList.subscribe(res => {
      this.deckList = res;
    });
    this.playerService.playerList.subscribe(res => {
      this.playerList = res;
    });
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

  addPlayer(){
    this.windowService.open(InsertFormComponent, {title:"Add Player", context:{fieldList:[{name:"Name",format:"string", objectKey:"name"}],objectType:"Player"}});
  }

  addDeck(){
    let myvar = this.windowService.open(InsertFormComponent, {title:"Add Deck", context:{fieldList:[{name:"Name", format:"string", objectKey:"name"},{name:"Archtype",format:"string", objectKey:"archtype"},{name:"Color", format:"multiSelect", choices:["White","Blue","Black","Red","Green","Colorless"], objectKey:"color"},{name:"Format", format:"singleSelect", choices:['Standard','Modern','Commander','Other'], objectKey:"format"}], objectType:"Deck"}});
  }

}
