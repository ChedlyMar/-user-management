import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.less']
})
export class MyProfileComponent implements OnInit {

  pageTitle="My profile";
  name="dali";
  lastName="belA";

  constructor() { }

  ngOnInit() {
  
  }

}
