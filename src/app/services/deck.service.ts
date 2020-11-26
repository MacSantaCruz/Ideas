import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deck } from '../models/deck.model';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  
  //apiUrl ='http://localhost:3001/api/';
  apiUrl = 'https://node-api-szmkxbu6aq-uw.a.run.app/api/'
  deckUrl = 'deck/';

  constructor(private http: HttpClient) { }

  getDecks():Observable<Deck[]>{
    return this.http.get<Deck[]>(this.apiUrl + this.deckUrl);
  }
}

