import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  apiUrl = environment.apiURL;
  playerUrl = '/player/';
  playerList: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>(null!);

  constructor(private http: HttpClient) { }

  getPlayerNames():Observable<Player[]>{
    return this.http.get<Player[]>(this.apiUrl + this.playerUrl + 'names/');
  }

  getPlayers():Observable<Player[]>{
    return this.http.get<Player[]>(this.apiUrl + this.playerUrl);
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
