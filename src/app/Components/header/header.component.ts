import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuType: string = 'default';
  userName:string="";
  constructor(private route:Router){}

  ngOnInit() {
    this.route.events.subscribe((val:any)=>{     
      if(localStorage.getItem('user')){
        let userStore = localStorage.getItem('user');
        let userData = userStore && JSON.parse(userStore);
        this.userName= userData.fname;
        this.menuType='user';    
      }
       else {
        this.menuType = 'default';
      }
      
    })
    
    
  }

  userLogout(){
    localStorage.removeItem('user');
    this.route.navigate(['register-auth']);

  }

}
