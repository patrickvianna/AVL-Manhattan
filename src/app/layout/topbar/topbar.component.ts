import { Component, OnInit } from '@angular/core';

import { PagesComponent } from 'src/app/pages/pages.component';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(public app: PagesComponent) { }

  ngOnInit() {
  }

}
