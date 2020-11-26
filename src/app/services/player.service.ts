import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  //apiUrl ='http://localhost:3001/api/';
  apiUrl = 'https://node-api-szmkxbu6aq-uw.a.run.app/api/'
  playerUrl = 'player/';

  constructor(private http: HttpClient) { }

  getPlayerNames():Observable<Player[]>{
    return this.http.get<Player[]>(this.apiUrl + this.playerUrl + 'names/');
  }
}
