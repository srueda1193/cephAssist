import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css'],
})
export class HeaderComponentComponent implements OnInit {

  items: MenuItem[] = [];
  sideItems: MenuItem[] = [];


  ngOnInit(): void {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
      },
      {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
      },
    ];

    this.sideItems =  [
      {
        items: [
            {
                label: 'Profile',
                icon: 'pi pi-user'
            },
            {
                label: 'Log out',
                icon: 'pi pi-sign-out'
            },
            {
                label: 'Log in',
                icon: 'pi pi-sign-in'
            }
        ]
    }
    ];

  }

}
