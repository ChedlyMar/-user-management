import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.less']
})
export class RoleComponent implements OnInit {

  @Input() isAdmin:boolean=false;
  @Input() isManager:boolean=false;
  @Input() isBilling:boolean=false;
  @Output() changAdmin:EventEmitter<boolean>=new EventEmitter();
  @Output() changeManager:EventEmitter<boolean>=new EventEmitter();
  @Output() changeBilling:EventEmitter<boolean>=new EventEmitter();
  constructor() { }

  ngOnInit() {
    
  }
  toggleAdmin(){
    this.isAdmin=!this.isAdmin;
    this.changAdmin.emit(this.isAdmin);
  }
  toggleManager(){
    this.isManager=!this.isManager;
    this.changeManager.emit(this.isManager)
  }
  toggleBilling(){
    this.isBilling=!this.isBilling
    this.changeBilling.emit(this.isBilling);
  }
  
}
