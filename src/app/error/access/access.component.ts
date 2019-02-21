import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-access',
  templateUrl: './access.component.html',
  styleUrls: ['./access.component.scss']
})
export class AccessComponent implements OnInit {

  constructor() { 
    document.getElementById('body').className = 'exception-body acess'
  }

  ngOnInit() {
  }
  
  ngOnDestroy(){
    document.getElementById('body').className = '';
   }

}
