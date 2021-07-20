import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { PojazdyService } from '../pojazdy.service';


@Component({
  selector: 'app-offer-add',
  templateUrl: './offer-add.component.html',
  styleUrls: ['./offer-add.component.scss']
})
export class OfferAddComponent implements OnInit {
  
  baseurl = "https://motosellapp.herokuapp.com/";
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  httpHeadersMulti = new HttpHeaders({'Content-Type': 'multipart/form-data'});
  constructor(private router:Router,
    private pService : PojazdyService,
    private http: HttpClient) { }
    file:any;
  offer:any;
  ngOnInit(): void {
    
    this.offer = {

      Tytul:'',
      Kategoria:'',
      Marka:'',
      Model:'',
      Rodzaj_Paliwa:'',
      Opis:'',
      Rok_produkcji:'',
      Przebieg:'',
      Pojemnosc_skokowa:'',
      Moc:'',
      Data_dodania:'',
      Data_publikacji:'',
      Zdjecie:File,
  
    }
  }
  onFileInput(files:FileList | null): void{
    if(files) {
      this.file = files.item(0);
      this.offer.Zdjecie = this.file;
      console.log(this.offer.Zdjecie) 
    }
  }
home() {
  this.router.navigateByUrl('/home')
}

pojazdPost = () =>{
  const user = sessionStorage.getItem('username');
  const body = new FormData();
  body.append('Zdjecie', this.file, this.file.name);
  body.append('Tytul', JSON.stringify(this.offer.Tytul));
  body.append('Kategoria', this.offer.Kategoria);
  body.append('Opis', JSON.stringify(this.offer.Opis));
  body.append('Marka', JSON.stringify(this.offer.Marka));
  body.append('Model', JSON.stringify(this.offer.Model));
  body.append('Rodzaj_Paliwa', JSON.stringify(this.offer.Rodzaj_Paliwa));
  body.append('Rok_produkcji', JSON.stringify(this.offer.Rok_produkcji));
  body.append('Przebieg', JSON.stringify(this.offer.Przebieg));
  body.append('Pojemnosc_skokowa', JSON.stringify(this.offer.Pojemnosc_skokowa));
  body.append('Moc', JSON.stringify(this.offer.Moc));
  body.append('Data_dodania', JSON.stringify(this.offer.Data_dodania));
  body.append('Data_publikacji', JSON.stringify(this.offer.Data_publikacji));
  body.append('Uzytkownik', JSON.stringify(user));

  return this.http.post(this.baseurl + 'api/pojazdy/', body).subscribe(
    data => {
      alert("dodano do bazy danych");
      this.router.navigateByUrl('/home')
    },error => {console.log(error)}
  )
  
}


}
