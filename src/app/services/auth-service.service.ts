import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from '../../data/userType'

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiUrl:string='http://localhost:8081/CompanyEmployee/';

  ISLOGIN:boolean=false;
  USER: User|any;
  constructor( private http :HttpClient) { }

  isLogin():boolean{
    return this.ISLOGIN;
  }

  setIsLogin(data:boolean){
    this.ISLOGIN=data;
  }

  userThatLogin( user:User){
    console.log(user)
     this.USER=user;
  }
  getUserThatLogin() :User{
    return this.USER
  }

  logOut(){
    this.ISLOGIN=false;
    this.USER={};
  }



  login( {email,password} :any):Observable<any>{
    return this.http.get<any>(this.apiUrl+'login/'+email+'/'+password)
  }


}
