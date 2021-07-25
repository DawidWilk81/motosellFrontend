import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccountComponent } from './account/account.component';
import { AccountLoggedComponent } from './account-logged/account-logged.component';
import { ContentComponent } from './content/content.component';
import { DetailsComponent } from './details/details.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeLoggedComponent } from './home-logged/home-logged.component';
import { LogInComponent } from './log-in/log-in.component';
import { OfferAddComponent } from './offer-add/offer-add.component';
import { RegisterComponent } from './register/register.component';
import { UpdateOfferComponent } from './update-offer/update-offer.component';
import { UserOffersComponent } from './user-offers/user-offers.component';
import { FilterPipe } from './filter.pipe';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UserService } from './user.service';
import { PojazdyService } from './pojazdy.service';
@NgModule({
  declarations: [
    AppComponent,
    AccountComponent,
    AccountLoggedComponent,
    ContentComponent,
    DetailsComponent,
    FooterComponent,
    HomeComponent,
    HomeLoggedComponent,
    LogInComponent,
    OfferAddComponent,
    RegisterComponent,
    UpdateOfferComponent,
    UserOffersComponent,
    FilterPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,

  ],
  providers: [UserService,PojazdyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
