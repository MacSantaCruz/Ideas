import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  apiUrl = environment.apiURL;
  gameUrl = '/game/';

  constructor(private http: HttpClient) { }

  submitNewGame(newGame: Game):Observable<Game>{
    return this.http.post<Game>(this.apiUrl + this.gameUrl,newGame);
  }

}
