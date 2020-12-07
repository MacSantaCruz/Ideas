import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player.model';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-game-display',
  templateUrl: './game-display.component.html',
  styleUrls: ['./game-display.component.scss']
})
export class GameDisplayComponent implements OnInit {

  playerAndInfo: Player[] = [];

  constructor(private playerService:PlayerService) { }

  ngOnInit(): void {
    this.playerService.getPlayers().subscribe(res => {
      this.playerAndInfo = res;
    });
  }

}
