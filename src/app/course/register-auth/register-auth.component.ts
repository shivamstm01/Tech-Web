import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserdataService } from 'src/app/Service/userdata.service';
import { login, signUp } from 'src/app/data';
@Component({
  selector: 'app-register-auth',
  templateUrl: './register-auth.component.html',
  styleUrls: ['./register-auth.component.css']
})
export class RegisterAuthComponent implements OnInit {
  showlogin:boolean=false;
 
  selectedAge: number = 18;
  states: string[] = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
    'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
    'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu',
    'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
  ];
  selectedState: string = ''; 
  cities: string[] = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata', 'Ahmedabad', 'Pune',
    'Surat', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur', 'Visakhapatnam', 'Indore', 'Thane',
    'Bhopal', 'Patna', 'Vadodara', 'Ghaziabad', 'Ludhiana', 'Coimbatore', 'Agra', 'Madurai',
    'Nashik', 'Vijayawada', 'Faridabad', 'Meerut', 'Rajkot', 'Kalyan-Dombivli', 'Vasai-Virar',
    'Varanasi', 'Srinagar', 'Aurangabad', 'Dhanbad', 'Amritsar', 'Navi Mumbai', 'Allahabad',
    'Howrah', 'Ranchi', 'Gwalior', 'Jabalpur', 'Vijayawada', 'Jodhpur', 'Raipur', 'Kota', 'Guwahati'
  ];

  selectedCity: string = ''; // Variable to hold the selected city
  

  constructor(private http:UserdataService) { }

  ngOnInit(): void {
  }
  RegisterAccount(data: signUp) {
        console.warn(data);
        this.http.userSignUp(data);
}

logIn(data:login){
  this.http.userLogin(data);
}
loginclose(){
  this.showlogin=false
}
Registerclose(){
  this.showlogin=true;
}



}
