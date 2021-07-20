import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {UserService} from './user.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PojazdyService {
  user = JSON.stringify(sessionStorage.getItem('username'))
  baseurl = "https://motosellapp.herokuapp.com/";
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  constructor(private http: HttpClient, private _userService: UserService) { }
  
  
  wszystkiePojazdy():Observable<any> {
    return this.http.get(this.baseurl + 'api/pojazdy/', {headers: this.httpHeaders});
  }

    PojazdClicked(id:any):Observable<any> {
    return this.http.get(this.baseurl + 'api/pojazdy/' + id + '/', {headers: this.httpHeaders});
  }

  PojazdyUzytkownika(userName:any):Observable<any> {
    const httpParam = new HttpParams().set('id',1);
    return this.http.get(this.baseurl + 'api/pojazdy/?' ,{headers:this.httpHeaders, params:httpParam});
  }
  
  pojazdGet(id:number) {
    return this.http.get(this.baseurl + `api/pojazdy/${id}/`);
  }

  updatePojazd(pojazd:any):Observable<any> {
    const body = {
      Tytul:pojazd.Tytul,
      Opis:pojazd.Opis,
      Kategoria:pojazd.Kategoria, // typ pojazdu
      Marka:pojazd.Marka,
      Model:pojazd.Model,
      Rok_produkcji:pojazd.Rok_produkcji,
      Przebieg:pojazd.Przebieg,
      Pojemnosc_skokowa:pojazd.Pojemnosc_skokowa,
      Moc:pojazd.Moc,
      Uzytkownik:pojazd.Uzytkownik,
    }
    return this.http.put(this.baseurl + 'api/pojazdy/' + pojazd.id + '/', body, 
    {headers: this.httpHeaders})
  }

}
