import { Component, OnInit } from '@angular/core';

import { emptyScheduled } from 'rxjs/internal/observable/empty';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  constructor() { }

  employeeMenu:boolean=false;
  
  ngOnInit() {
  }

  toggleEmployeeMenu() :void{
    this.employeeMenu=!this.employeeMenu;
    console.log(this.employeeMenu);
  }

}
