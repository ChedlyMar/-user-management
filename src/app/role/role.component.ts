import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.less']
})
export class RoleComponent implements OnInit {

  @Input() role:string[];
  @Output() changRole:EventEmitter<any>=new EventEmitter(); 
  i:number;
  admin:boolean=false;
  manager:boolean=false;
  billing:boolean=false;
  
  constructor() { }

  ngOnInit() {
    for(this.i=0; this.i<this.role.length; this.i++){
     
      if(this.role[this.i]=="admin"){
        this.admin=true;
      }      
      if(this.role[this.i]=="manager"){
        this.manager=true;
      }
      if(this.role[this.i]=="billing"){
        this.billing=true;
      }
    }
  }
  toggleAdmin(){
    this.admin=!this.admin;
    
  if(this.role.indexOf("admin")>=0 ){
    this.role[this.role.indexOf("admin")]="";
  }
  else{ 
    if(this.role.indexOf("")>=0){
      this.role[this.role.indexOf("")]="admin";
    }
    else{
      this.role[this.role.length]="admin"
    }
  }
  
    this.changRole.emit(this.role);
  }
  toggleManager(){
    this.manager=!this.manager;

    if(this.role.indexOf("manager")>=0 ){
      this.role[this.role.indexOf("manager")]="";
    }
    else{ 
      if(this.role.indexOf("")>=0){
        this.role[this.role.indexOf("")]="manager";
      }
      else{
        this.role[this.role.length]="manager";
      }
    }
    this.changRole.emit(this.role);
  }
  toggleBilling(){
    this.billing=!this.billing;
    if(this.role.indexOf("billing")>=0 ){
      this.role[this.role.indexOf("billing")]="";
    }
    else{ 
      if(this.role.indexOf("")>=0){
        this.role[this.role.indexOf("")]="billing";
      }
      else{
        this.role[this.role.length]="billing";
      }
    }
    this.changRole.emit(this.role);
  }
  
}
