import { HttpClient } from '@angular/common/http';
import { Injectable ,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import {login, signUp} from '../data'



@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  invalidUserAuth=new EventEmitter<boolean>(false)
 

  constructor(private http:HttpClient,private router:Router) { }

  userSignUp(data:signUp){

    
    this.http.post('http://localhost:3000/UserData',
    data,
    {observe:'response'}).subscribe((result)=>{
      console.warn(result)
      if(result){
        localStorage.setItem('user',JSON.stringify(result.body))
        this.router.navigate(['Courses/Course'])
      }
    })
  } 
 

  userLogin(data:login){
    this.http.get<signUp[]>(`http://localhost:3000/UserData?username=${data.username}&password=${data.password}`,
    {observe:'response'}
    ).subscribe((result)=>{
      if(result && result.body?.length){
        localStorage.setItem('user',JSON.stringify(result.body[0]));
        this.router.navigate(['/Courses/Course']);
        this.invalidUserAuth.emit(false)
      }else{
        this.invalidUserAuth.emit(true)
        
        console.log("Error");
        
      }
    })
  }

  userAuthReload(){
    if(localStorage.getItem('user')){
      this.router.navigate(['/home']);
    }
  }
}
