import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  //apiUrl ='http://localhost:3001/api/';
  //apiUrl = 'https://node-api-szmkxbu6aq-uw.a.run.app/api/'
  apiUrl = environment.apiURL;
  gameUrl = '/game/';

  constructor(private http: HttpClient) { }

  submitNewGame(newGame: Game):Observable<Game>{
    return this.http.post<Game>("http://localhost:3001/api/game",newGame);
  }

}
