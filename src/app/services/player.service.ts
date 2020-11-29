import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  //apiUrl ='http://localhost:3001/api/';
  //apiUrl = 'https://node-api-szmkxbu6aq-uw.a.run.app/api/'
  apiUrl = environment.apiURL;
  playerUrl = '/player/';
  playerList: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>(null!);

  constructor(private http: HttpClient) { }

  getPlayerNames():Observable<Player[]>{
    return this.http.get<Player[]>(this.apiUrl + this.playerUrl + 'names/');
  }

  postPlayer(player:any){
    return this.http.post<Player>(this.apiUrl + this.playerUrl,player);
  }

  getNewPlayerList(){
    this.getPlayerNames().subscribe(res => {
      this.playerList.next(res);
    });
  }
}
