import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PojazdyService } from '../pojazdy.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  providers:[PojazdyService],
})
export class DetailsComponent implements OnInit {
  pojazdy:any=[];
  constructor(private _route:ActivatedRoute,private _Pservice:PojazdyService, private _location:Location) { }

  ngOnInit(): void {
    const id = this._route.snapshot.paramMap.get('id');

    this._Pservice.pojazdGet(Number(id)).subscribe(
      (dane) => {
        this.pojazdy = dane;
        console.table(this.pojazdy);
      },(error) => {
        console.log(error);
      }
    )
  }
  back(){
    this._location.back();
  }
}
