import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn:'root'
})
export class TodoService{
    apiUrl = environment.apiURL;
    
    constructor(private http: HttpClient){ }

    getPythonScript(){
        return this.http.get<any>(this.apiUrl + 'pythonScript');
    }

    getTransactions(){
        return this.http.get<any>(this.apiUrl + "transactions")
    }
}