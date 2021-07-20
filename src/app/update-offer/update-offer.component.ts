import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PojazdyService } from '../pojazdy.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-update-offer',
  templateUrl: './update-offer.component.html',
  styleUrls: ['./update-offer.component.scss'],
  providers:[PojazdyService],
})
export class UpdateOfferComponent implements OnInit {
selectedPojazd:any={
  id:-1,
  Tytul:'',
  Opis:'',
  Kategoria:'', // typ pojazdu
  Marka:'',
  Model:'',
  Rok_produkcji:'',
  Przebieg:'',
  Pojemnosc_skokowa:'',
  Moc:'',
  Uzytkownik:''
};
updatePojazd = () => {
  this._Pservice.updatePojazd(this.selectedPojazd).subscribe(
    data => {
      this.selectedPojazd = data;
      alert('updated');
      this._location.back();
    },
    error => {
      console.log(error);
    }
  )
}
  constructor(private _route:ActivatedRoute, private _Pservice:PojazdyService, 
    private _location:Location) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');

    this._Pservice.pojazdGet(Number(id)).subscribe(
      (response) => {
        this.selectedPojazd = response;
      },
      (error) => {console.log(error)}
    );
  };
back(){
  this._location.back();
};


}
