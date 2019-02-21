import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor() { 
    document.getElementById('body').className = 'exception-body error'
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    document.getElementById('body').className = '';
   }
}
