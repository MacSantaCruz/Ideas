import { Component, Input, OnInit, Output } from '@angular/core';
import { NbToastrService, NbWindowRef } from '@nebular/theme';
import { Deck } from 'src/app/models/deck.model';
import { Player } from 'src/app/models/player.model';
import { DeckService } from 'src/app/services/deck.service';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-insert-form',
  templateUrl: './insert-form.component.html',
  styleUrls: ['./insert-form.component.scss']
})
export class InsertFormComponent implements OnInit {
  @Input() objectType: string; 
  @Input() fieldList: any[] = [];
  insertObj: Deck | Player;
  MAX_STRING_LENGTH = 15;
  constructor(protected windowRef: NbWindowRef, private playerService: PlayerService, private deckService: DeckService, private toastrService: NbToastrService) { }

  ngOnInit(): void {
    if(this.objectType === "Deck"){
      this.insertObj = new Deck();
    };
    if(this.objectType === "Player"){
      this.insertObj = new Player();
    }
  }

  insertObject(){
    if(this.checkForNullsAndLength()){
      this.determineAndPost().then(res => {
        this.toastrService.show("Posted Sucessfully.", "Success", {status:'success'});
        this.windowRef.close();
      });
    }
  }

  checkForNullsAndLength(){
    for(let property in this.insertObj){
      if(this.insertObj.hasOwnProperty(property)){
        if(this.insertObj[property] === null || this.insertObj[property] === ''){
          this.toastrService.show("Not all Fields have been filled out.", "Error", { status:'danger' })
          return false;
        }
        if(typeof this.insertObj[property] === 'string' && this.insertObj[property].length > this.MAX_STRING_LENGTH){
          this.toastrService.show("String values must be less then 15 characters long.", "Error", { status:'danger' })
          return false;
        }
      }
    }
    return true;
  }

  async determineAndPost(){
    if(this.objectType === "Deck"){
      this.deckService.postDeck(this.insertObj).subscribe(res => {
        this.deckService.getNewDeckList();
      });
    }
    else if(this.objectType === "Player"){
      this.playerService.postPlayer(this.insertObj).subscribe(res => {
        this.playerService.getNewPlayerList();
      })
    }
  }
}
