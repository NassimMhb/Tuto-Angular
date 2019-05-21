import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonnesService {

  constructor() { }

  getPersonnes(){
    return [
      {nom: "Nom1", prenom: "Prenom1" },
      {nom: "Nom2", prenom: "Prenom2" },
      {nom: "Nom3", prenom: "Prenom3" },
      {nom: "Nom4", prenom: "Prenom4" }
      ];
  }
}
