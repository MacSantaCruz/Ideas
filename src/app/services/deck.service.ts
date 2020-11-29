import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Deck } from '../models/deck.model';
import { environment } from '../../../src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  
  apiUrl = environment.apiURL;
  deckUrl = '/deck/';

  deckList: BehaviorSubject<Deck[]> = new BehaviorSubject<Deck[]>(null!);

  constructor(private http: HttpClient) { }

  getDecks():Observable<Deck[]>{
    return this.http.get<Deck[]>(this.apiUrl + this.deckUrl);
  }

  postDeck(deck:any){
    return this.http.post<Deck>(this.apiUrl + this.deckUrl,deck);
  }

  getNewDeckList(){
    this.getDecks().subscribe(list => {
      this.deckList.next(list);
    });
  }
}

