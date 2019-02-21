import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error404',
  templateUrl: './error404.component.html',
  styleUrls: ['./error404.component.scss']
})
export class Error404Component implements OnInit {

  constructor() { 
    document.getElementById('body').className = 'exception-body notfound'
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    document.getElementById('body').className = '';
   }
}
