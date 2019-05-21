import { Component, OnInit } from '@angular/core';


// je supprime le templateUrl html je le remplace directement par le code dans template en dessous

@Component({
  selector: 'app-page-not-found',
  template: '<h1> Page 404 not found, la page que vous recherchez n\'existe pas.</h1>'
    ,
  styleUrls: ['../style/page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
