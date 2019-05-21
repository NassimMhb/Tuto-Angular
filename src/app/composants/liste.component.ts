import { Component, OnInit } from '@angular/core';
import {PersonnesService} from "../services/personnes.service";

@Component({
  selector: 'app-liste',
  templateUrl: '../templates/liste.component.html',
  styleUrls: ['../style/liste.component.css']
})
export class ListeComponent implements OnInit {

  titre = "Liste des personnes";

  public personnes = [];

  dataReady = false;

  constructor(private _personnesService: PersonnesService) { }

  ngOnInit() {
    this.personnes = this._personnesService.getPersonnes();
    this.bootstrap();
  }

  bootstrap(){
    this.dataReady = true;
  }

}
