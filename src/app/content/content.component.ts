import { Component, OnInit } from '@angular/core';
import { PojazdyService } from '../pojazdy.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [PojazdyService]
})
export class ContentComponent implements OnInit {
  totalRecords:any;
  page:number = 1;

  wybranyPojazd:any;
  pojazdy:any = [
    {Tytul: 'mazda'}
  ];

  ngOnInit(): void {
    
  }
  constructor(private pService:PojazdyService) {
      this.wszystkiePojazdy();
      this.wybranyPojazd = {
        id: -1,
        Tytul:'',
        Opis:'',
        Kategoria:'', // typ pojazdu
        Marka:'',
        Model:'',
        Rok_produkcji:'',
        Przebieg:'',
        Pojemnosc_skokowa:'',
        Moc:'',
        Rodzaj_paliwa:'',
        uzytkownik:sessionStorage.getItem('username'),
        Zdjecie:'',
        Data_dodania:'',
        Data_publikacji:'',
      };
    }

    wszystkiePojazdy = () => {
        this.pService.wszystkiePojazdy().subscribe(
          data =>{
            this.pojazdy = data;
            this.totalRecords = data.length;
            console.log(this.totalRecords);
          },error=>{console.log('error',error)}
        )
    };

    offerClicked = (pojazd:any) =>{
      console.log(pojazd.id);
      this.pService.PojazdClicked(pojazd.id).subscribe(
        data =>{
          this.wybranyPojazd = data;
          
          console.log(this.wybranyPojazd);
        },error=>{console.log('error',error)}
      )

    };


}

