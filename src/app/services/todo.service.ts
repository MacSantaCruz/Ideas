import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn:'root'
})
export class TodoService{
    apiUrl ='http://localhost:3001/api/';

    constructor(private http: HttpClient){ }

    getPythonScript(){
        return this.http.get<any>(this.apiUrl + 'pythonScript');
    }

    getTransactions(){
        return this.http.get<any>(this.apiUrl + "transactions")
    }
}