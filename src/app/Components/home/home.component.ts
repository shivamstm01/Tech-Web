import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  selectimage=[
    {image:'adi-goldstein-EUsVwEOsblE-unsplash.jpg'},
    {image:'ales-nesetril-Im7lZjxeLhg-unsplash.jpg'},
    {image:'alex-knight-2EJCSULRwC8-unsplash.jpg'}
]
imagePath: string[] = ['adi-goldstein-EUsVwEOsblE-unsplash.jpg',
                      'ales-nesetril-Im7lZjxeLhg-unsplash.jpg', 
                      'alex-knight-2EJCSULRwC8-unsplash.jpg'];
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.selectimage);
    
  }

}
