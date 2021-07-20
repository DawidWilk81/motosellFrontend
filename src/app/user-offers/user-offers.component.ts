import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PojazdyService } from '../pojazdy.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-offers',
  templateUrl: './user-offers.component.html',
  styleUrls: ['./user-offers.component.scss'],
  providers: [PojazdyService],
})
export class UserOffersComponent implements OnInit{

  user = JSON.stringify(sessionStorage.getItem('username'));
  queryUser:any;

  ofertyGet:any;
  modifyBody:any;

  constructor(private pService:PojazdyService, private aRoutes: ActivatedRoute,private _router:Router) { 
    this.ofertyUzytkownika()
  }
  ngOnInit(): void {
  }
  home(){
    this._router.navigateByUrl('/home');
  }
  ofertyUzytkownika = () => {
    this.pService.PojazdyUzytkownika(this.user).subscribe(
      data =>{
        this.ofertyGet = data;
        console.table(data);
      },error => {
        console.log('error', error);
      }
    )
  }

}
