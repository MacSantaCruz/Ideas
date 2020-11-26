import { DeclareFunctionStmt } from '@angular/compiler';
import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { NbSelectComponent, NbToastrService } from '@nebular/theme';
import { Deck } from 'src/app/models/deck.model';
import { Game } from 'src/app/models/game.model';
import { Participant } from 'src/app/models/participant.model';
import { Player } from 'src/app/models/player.model';
import { DeckService } from 'src/app/services/deck.service';
import { GameService } from 'src/app/services/game.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent implements OnInit {
  deckList : Deck[] = [];
  playerList: Player[] = [];
  participantList: Participant[] = [];
  types: string[] = ["Modern","Commander","Standard"];
  selectedType: string = null!;
  numberList: number[] = [1,2];
  selectedDeckId: string; 
  selectedPlayerId: string;
  numberOfPlayers: number = 2;

  constructor(private toastrService: NbToastrService, private deckService: DeckService, private playerService: PlayerService, private gameService: GameService) { }

  ngOnInit(): void {
    this.deckService.getDecks().subscribe(res => {
      this.deckList = res;
    });
    this.playerService.getPlayerNames().subscribe(res => {
      this.playerList = res;
    });
    this.participantList.push(new Participant());
    this.participantList.push(new Participant());
  }

  addPlayer(){
    if(this.numberOfPlayers < 4){
      this.participantList.push(new Participant());
      this.numberOfPlayers++;
      this.numberList.push(this.numberOfPlayers);
    }
  }

  subPlayer(){
    if(this.numberOfPlayers > 2){
      this.participantList.pop();
      this.numberList.pop();
      this.numberOfPlayers--;
    }
  }

  submitGame(){
    try{
      this.errorCheck();
      let newGame = new Game();
      newGame.winner = this.participantList.find(participant => participant.place === 1)!;
      newGame.loser = [];
      for(let participant of this.participantList){
        if(participant.place !== 1){
          newGame.loser.push(participant);
        }
      }
      newGame.type = this.selectedType;

      this.gameService.submitNewGame(newGame).subscribe(val => {
        this.toastrService.show("Posted Sucessfully.", "Success", {status:'success'});
      });
    }
    catch(e){
      this.toastrService.show(e, "Error", { status:'danger' });
    }

  }

  errorCheck(){
    //Type is filled out
    try{
      this.nullCheck();
      this.repeatedValueCheck(this.playerList,'player');
      this.repeatedValueCheck(this.deckList,'deck');
      this.placementCheck();
    }
    catch(e){
      throw e;
    }
  }

  placementCheck(){
    let placementList = Object.assign([],this.numberList);
    for(let participant of this.participantList){
      let place = participant.place;
      let index = placementList.indexOf(place);
      if(index === -1){
        throw "Each placement must be unique";
      }
        placementList.splice(index,1);
    }
  }

  repeatedValueCheck(objectList : any[],key:string){
    let copyList = Object.assign([],objectList);
    for(let participant of this.participantList){
      let value = participant[key];
      let index = copyList.indexOf(value);
      if(index === -1){
        throw "Each value in a field must be unique";
      }
        copyList.splice(index,1);
    }
  }

  nullCheck(){
    for(let participant of this.participantList){
      if(participant.place === undefined || participant.deck === undefined || participant.player === undefined || participant.place === undefined){
        throw "Not all Participant fields are filled out"
      }
    }
    if(this.selectedPlayerId === null){
      throw "No Type Selected";
    }
  }

}
