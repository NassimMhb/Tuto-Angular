import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from "@angular/router";
import {HeroesComponent} from "./composants/heroes.component";
import {ListeComponent} from "./composants/liste.component";
import {PageNotFoundComponent} from "./composants/page-not-found.component";
import {AccueilComponent} from "./composants/accueil.component";

const routes: Routes = [
  {path : "", component: AccueilComponent, pathMatch:"prefix"},
  {path : "heroes", component: HeroesComponent},
  {path : "liste", component: ListeComponent},
  {path : "**", component: PageNotFoundComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
