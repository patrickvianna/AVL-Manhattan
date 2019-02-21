import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

   constructor() {
    document.getElementById('body').className = 'login-body';
   }

   ngOnInit() {
   }

   ngOnDestroy(){
    document.getElementById('body').className = '';
   }

}
