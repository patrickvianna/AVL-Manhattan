import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { ScrollPanel } from 'primeng/primeng';

import { PagesComponent } from 'src/app/pages/pages.component';

@Component({
  selector: 'app-rightpanel',
  templateUrl: './rightpanel.component.html',
  styleUrls: ['./rightpanel.component.scss']
})
export class RightpanelComponent implements AfterViewInit {

  @ViewChild('scrollRightPanel') rightPanelMenuScrollerViewChild: ScrollPanel;

  constructor(public app: PagesComponent) {}

  ngAfterViewInit() {
    setTimeout(() => {this.rightPanelMenuScrollerViewChild.moveBar(); }, 100);
  }

  onTabChange(event) {
    setTimeout(() => {this.rightPanelMenuScrollerViewChild.moveBar(); }, 450);
  }

}
