import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent } from './home/home.component';
import {HomeLoggedComponent} from './home-logged/home-logged.component';
import {LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';
import {UserOffersComponent} from './user-offers/user-offers.component';
import {OfferAddComponent} from './offer-add/offer-add.component';
import { DetailsComponent } from './details/details.component';
import { UpdateOfferComponent } from './update-offer/update-offer.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeLoggedComponent},
  {path: 'login', component: LogInComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'myOffers', component: UserOffersComponent},
  {path: 'addOffer', component: OfferAddComponent},
  //detale po kliknieciu na oferte
  {path: 'home/pojazd/:id', component: DetailsComponent},
  {path: 'pojazd/:id', component: DetailsComponent},
  //detale po kliknieciu na ofertę uzytkownika do modyfikacji
  {path: 'myOffers/oferty/:id', component: UpdateOfferComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
