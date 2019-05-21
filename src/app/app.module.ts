import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './composants/heroes.component';
import { HeroDetailComponent } from './composants/hero-detail.component';
import { MessagesComponent } from './composants/messages.component';
import { AppRoutingModule } from './app-routing.module';
import { ListeComponent } from './composants/liste.component';
import { PageNotFoundComponent } from './composants/page-not-found.component';
import { AccueilComponent } from './composants/accueil.component';
import {PersonnesService} from "./services/personnes.service";

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    ListeComponent,
    PageNotFoundComponent,
    AccueilComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    // no need to place any providers due to the `providedIn` flag...
    PersonnesService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
