import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { IonicModule } from '@ionic/angular';
import { AccountLoggedComponent } from './account-logged/account-logged.component';
import { HomeLoggedComponent } from './home-logged/home-logged.component';
import { OfferAddComponent } from './offer-add/offer-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserOffersComponent } from './user-offers/user-offers.component';
import { PojazdyService } from './pojazdy.service';
import { DetailsComponent } from './details/details.component';

import { FilterPipe } from './filter.pipe';
import { UpdateOfferComponent } from './update-offer/update-offer.component';


@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    ContentComponent,
    FooterComponent,
    LogInComponent,
    RegisterComponent,
    HomeComponent,
    AccountLoggedComponent,
    HomeLoggedComponent,
    OfferAddComponent,
    UserOffersComponent,
    DetailsComponent,

    FilterPipe,
     UpdateOfferComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [UserService,PojazdyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
