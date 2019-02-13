import { Component, Input, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MenuItem, ScrollPanel } from 'primeng/primeng';

import { PagesComponent } from 'src/app/pages/pages.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  @Input() reset: boolean;

  model: any[];

  @ViewChild('layoutMenuScroller') layoutMenuScrollerViewChild: ScrollPanel;

  constructor(public app: PagesComponent) { }

  ngOnInit() {
    this.model = [
      { label: 'Dashboard', icon: 'fa fa-fw fa-home', routerLink: ['/'] },
      { label: 'Pagina Vazia', icon: 'fa fa-fw fa-home', routerLink: ['/blank'] },
      { label: 'Login', icon: 'fa fa-fw fa-home', routerLink: ['/login'] },
      { label: 'access', icon: 'fa fa-fw fa-home', routerLink: ['/access'] },
      { label: 'error', icon: 'fa fa-fw fa-home', routerLink: ['/error'] },
      { label: '404', icon: 'fa fa-fw fa-home', routerLink: ['/404'] },
      {
        label: 'Pages', icon: 'fa fa-fw fa-cube',
        items: [
          { label: 'Empty Page', icon: 'fa fa-fw fa-square-o', routerLink: ['/empty'] },
          { label: 'Landing Page', icon: 'fa fa-fw fa-globe', url: 'assets/pages/landing.html', target: '_blank' },
          { label: 'Login Page', icon: 'fa fa-fw fa-sign-in', url: 'assets/pages/login.html', target: '_blank' },
          { label: 'Error Page', icon: 'fa fa-fw fa-exclamation-circle', url: 'assets/pages/error.html', target: '_blank' },
          { label: '404 Page', icon: 'fa fa-fw fa-times', url: 'assets/pages/404.html', target: '_blank' },
        ]
      },
      {
        label: 'Themes', icon: 'fa fa-fw fa-paint-brush', badge: 16,
        items: [
            {
                label: 'Teal - Yellow', icon: 'fa fa-fw fa-paint-brush',
                items: [
                    {
                        label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('teal-yellow', null)
                    },
                    {
                        label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('teal-yellow', 'light')
                    },
                    {
                        label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('teal-yellow', 'dark')
                    }
                ]
            },
            {
                label: 'Blue - Orange', icon: 'fa fa-fw fa-paint-brush',
                items: [
                    {
                        label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('blue-orange', null)
                    },
                    {
                        label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('blue-orange', 'light')
                    },
                    {
                        label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('blue-orange', 'dark')
                    }
                ]
            },
            {
                label: 'Pink - Teal', icon: 'fa fa-fw fa-paint-brush',
                items: [
                    {
                        label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('pink-teal', null)
                    },
                    {
                        label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('pink-teal', 'light')
                    },
                    {
                        label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('pink-teal', 'dark')
                    }
                ]
            },
            {
                label: 'Indigo - Purple', icon: 'fa fa-fw fa-paint-brush',
                items: [
                    {
                        label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('indigo-purple', null)
                    },
                    {
                        label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('indigo-purple', 'light')
                    },
                    {
                        label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('indigo-purple', 'dark')
                    }
                ]
            },
            {
                label: 'Indigo - Yellow', icon: 'fa fa-fw fa-paint-brush',
                items: [
                    {
                        label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('indigo-yellow', null)
                    },
                    {
                        label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('indigo-yellow', 'light')
                    },
                    {
                        label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('indigo-yellow', 'dark')
                    }
                ]
            },
            {
                label: 'Cyan - Deep Orange', icon: 'fa fa-fw fa-paint-brush',
                items: [
                    {
                        label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('cyan-deeporange', null)
                    },
                    {
                        label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('cyan-deeporange', 'light')
                    },
                    {
                        label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('cyan-deeporange', 'dark')
                    }
                ]
            },
            {
                label: 'Green - Pink', icon: 'fa fa-fw fa-paint-brush',
                items: [
                    {
                        label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('green-pink', null)
                    },
                    {
                        label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('green-pink', 'light')
                    },
                    {
                        label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('green-pink', 'dark')
                    }
                ]
            },
            {
                label: 'Green - Orange', icon: 'fa fa-fw fa-paint-brush',
                items: [
                    {
                        label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('green-orange', null)
                    },
                    {
                        label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('green-orange', 'light')
                    },
                    {
                        label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('green-orange', 'dark')
                    }
                ]
            },
            {
                label: 'Green - Purple', icon: 'fa fa-fw fa-paint-brush',
                items: [
                    {
                        label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('green-purple', null)
                    },
                    {
                        label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('green-purple', 'light')
                    },
                    {
                        label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('green-purple', 'dark')
                    }
                ]
            },
            {
                label: 'Orange - Cyan', icon: 'fa fa-fw fa-paint-brush',
                items: [
                    {
                        label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('orange-cyan', null)
                    },
                    {
                        label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('orange-cyan', 'light')
                    },
                    {
                        label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('orange-cyan', 'dark')
                    }
                ]
            },
            {
                label: 'Blue - Grey', icon: 'fa fa-fw fa-paint-brush',
                items: [
                    {
                        label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('blue-grey', null)
                    },
                    {
                        label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('blue-grey', 'light')
                    },
                    {
                        label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('blue-grey', 'dark')
                    }
                ]
            },
            {
                label: 'Deep Purple - Teal', icon: 'fa fa-fw fa-paint-brush',
                items: [
                    {
                        label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('deeppurple-teal', null)
                    },
                    {
                        label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('deeppurple-teal', 'light')
                    },
                    {
                        label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('deeppurple-teal', 'dark')
                    }
                ]
            },
            {
                label: 'Pink - Cyan', icon: 'fa fa-fw fa-paint-brush',
                items: [
                    {
                        label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('pink-cyan', null)
                    },
                    {
                        label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('pink-cyan', 'light')
                    },
                    {
                        label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('pink-cyan', 'dark')
                    }
                ]
            },
            {
                label: 'Orange - Indigo', icon: 'fa fa-fw fa-paint-brush',
                items: [
                    {
                        label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('orange-indigo', null)
                    },
                    {
                        label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('orange-indigo', 'light')
                    },
                    {
                        label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('orange-indigo', 'dark')
                    }
                ]
            },
            {
                label: 'Dark Pink - Cyan', icon: 'fa fa-fw fa-paint-brush',
                items: [
                    {
                        label: 'Colored', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('darkpink-cyan', null)
                    },
                    {
                        label: 'Light', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('darkpink-cyan', 'light')
                    },
                    {
                        label: 'Dark', icon: 'fa fa-fw fa-paint-brush',
                        command: (event) => this.changeTheme('darkpink-cyan', 'dark')
                    }
                ]
            }
        ]
    },
    ];
  }

  ngAfterViewInit() {
    setTimeout(() => { this.layoutMenuScrollerViewChild.moveBar(); }, 100);
  }

  changeTheme(theme: string, mode: string) {
    const layoutLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('layout-css');
    layoutLink.href = 'assets/layout/css/layout-' + theme + '.css';

    const themeLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('theme-css');
    themeLink.href = 'assets/theme/theme-' + (mode ? theme + '-' + mode : theme) + '.css';
  }

  onMenuClick(event) {
    if (!this.app.isHorizontal()) {
      setTimeout(() => {
       this.layoutMenuScrollerViewChild.moveBar();
      }, 450);
    }

    this.app.onMenuClick(event);
  }

}

@Component({
  /* tslint:disable:component-selector */
  selector: '[app-submenu]',
  /* tslint:enable:component-selector */
  template: `
      <ng-template ngFor let-child let-i="index" [ngForOf]="(root ? item : item.items)">
          <li [ngClass]="{'active-menuitem': isActive(i)}" [class]="child.badgeStyleClass" *ngIf="child.visible === false ? false : true">
              <a [href]="child.url||'#'" (click)="itemClick($event,child,i)" (mouseenter)="onMouseEnter(i)"
                 *ngIf="!child.routerLink" [ngClass]="child.styleClass"
                 [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target">
                  <i [ngClass]="child.icon"></i>
                  <span>{{child.label}}</span>
                  <i class="fa fa-fw fa-angle-down layout-submenu-toggler" *ngIf="child.items"></i>
                  <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
              </a>

              <a (click)="itemClick($event,child,i)" (mouseenter)="onMouseEnter(i)" *ngIf="child.routerLink"
                 [routerLink]="child.routerLink" routerLinkActive="active-menuitem-routerlink"
                 [routerLinkActiveOptions]="{exact: true}" [attr.tabindex]="!visible ? '-1' : null" [attr.target]="child.target">
                  <i [ngClass]="child.icon"></i>
                  <span>{{child.label}}</span>
                  <i class="fa fa-fw fa-angle-down layout-submenu-toggler" *ngIf="child.items"></i>
                  <span class="menuitem-badge" *ngIf="child.badge">{{child.badge}}</span>
              </a>
              <ul app-submenu [item]="child" *ngIf="child.items" [visible]="isActive(i)"
                              [reset]="reset" [parentActive]="isActive(i)"
                              [@children]="(app.isHorizontal())&&root ? isActive(i) ?
                  'visible' : 'hidden' : isActive(i) ? 'visibleAnimated' : 'hiddenAnimated'"></ul>
          </li>
      </ng-template>
  `,
  animations: [
      trigger('children', [
          state('hiddenAnimated', style({
              height: '0px'
          })),
          state('visibleAnimated', style({
              height: '*'
          })),
          state('visible', style({
              height: '*',
              'z-index': 100
          })),
          state('hidden', style({
              height: '0px',
              'z-index': '*'
          })),
          transition('visibleAnimated => hiddenAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
          transition('hiddenAnimated => visibleAnimated', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
      ])
  ]
})

export class AppSubMenuComponent {

  @Input() item: MenuItem;

  @Input() root: boolean;

  @Input() visible: boolean;

  _parentActive: boolean;

  _reset: boolean;

  activeIndex: number;

  constructor(public app: PagesComponent, public appMenu: MenuComponent) { }

  itemClick(event: Event, item: MenuItem, index: number) {
      if (this.root) {
          this.app.menuHoverActive = !this.app.menuHoverActive;
      }
      // avoid processing disabled items
      if (item.disabled) {
          event.preventDefault();
          return true;
      }

      // activate current item and deactivate active sibling if any
      this.activeIndex = (this.activeIndex === index) ? null : index;

      // execute command
      if (item.command) {
          item.command({ originalEvent: event, item: item });
      }

      // prevent hash change
      if (item.items || (!item.url && !item.routerLink)) {
          setTimeout(() => {
              this.appMenu.layoutMenuScrollerViewChild.moveBar();
          }, 450);
          event.preventDefault();
      }

      // hide menu
      if (!item.items) {
          if (this.app.isHorizontal()) {
              this.app.resetMenu = true;
          } else {
              this.app.resetMenu = false;
          }

          this.app.overlayMenuActive = false;
          this.app.staticMenuMobileActive = false;
          this.app.menuHoverActive = !this.app.menuHoverActive;
      }
  }

  onMouseEnter(index: number) {
      if (this.root && this.app.menuHoverActive && (this.app.isHorizontal())
          && !this.app.isMobile() && !this.app.isTablet()) {
          this.activeIndex = index;
      }
  }

  isActive(index: number): boolean {
      return this.activeIndex === index;
  }

  @Input() get reset(): boolean {
      return this._reset;
  }

  set reset(val: boolean) {
      this._reset = val;

      if (this._reset && (this.app.isHorizontal())) {
          this.activeIndex = null;
      }
  }

  @Input() get parentActive(): boolean {
      return this._parentActive;
  }

  set parentActive(val: boolean) {
      this._parentActive = val;

      if (!this._parentActive) {
          this.activeIndex = null;
      }
  }
}
