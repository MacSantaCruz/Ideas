import { Component, OnInit } from '@angular/core';
import {NbSidebarService, NbMenuItem} from '@nebular/theme'

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  
  items: NbMenuItem[] = [
    {
      title: 'Home',
      icon: 'home-outline',
      link: '/home',
      home: true
    },
    {
      title: 'Todo',
      icon: 'map-outline',
      link: '/todo'
    }
  ];
  constructor(private readonly sidebarService: NbSidebarService) {
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle();
    return false;
  }

  ngOnInit(): void {
  }

}
