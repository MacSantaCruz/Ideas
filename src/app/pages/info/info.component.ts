import { Component, OnInit } from '@angular/core';
import { Deck } from 'src/app/models/deck.model';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  todos:Todo[] = [
    {
      title:"Deck",
      info:"Decks are placed into the Participant object. They are basically used right now to do analysis on the deck as a whole. Will need to expand object to get a more granular view.",
      properties:["name: string ","color: string ","archType: string ","format: string ","win_count : number ","loss_count : number"],
      link:"/deck"
    }, 
    {
      title:"Participant",
      info:"Participants are placed into the Game Object. These may be removed in the future. They do give the ability to easily grab Player and Deck combinations.",
      properties:["player: player_id ","deck: deck_id ", "place: number"],
      link:"/participant"
    },
    {
      title:"Game",
      info:"Games are placed into the Player Object. When these are inserted the win_count and loss_count are updated on the decks. The player objects are also updated either in their wins and losses list.",
      properties:["winner: participant_id ", "loser: participant_id[] ", " type: string"],
      link:"/game"
    },
    {
      title:"Player", 
      info: "Player is the top object. These have no real rules yet. Will probably expand these to have names unique.",
      properties:["name: string ", "wins: game_id[] ", " losses: game_id[]"],
      link:"/player"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
