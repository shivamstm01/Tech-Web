import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName:string="";
  user:any={}
  menuType: string = 'default';

  constructor() { }

  ngOnInit() {
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    // this.userName= userData.fname;
    this.user=userData
  }
  


}
