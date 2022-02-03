import { Component, OnInit } from '@angular/core';
import {FormGroup ,FormControl} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm=new FormGroup({
    email: new FormControl(''),
    password:new FormControl('')
  }) ;

  constructor( private authService: AuthServiceService , private router:Router ) { }

  ngOnInit(): void {
    // THIS WILL WORK IF WE USE THE LOCALSTORIGE 
    if(this.authService.isLogin()){
      this.router.navigate(['/admin'])
    }
  }
  onSubmit(){
    console.log(this.loginForm.value)
    this.authService.login(this.loginForm.value).subscribe((res)=>{
      if(res.isEmpty){
        this.authService.setIsLogin(!res.isEmpty)
        
      }else{
        this.authService.setIsLogin(!res.isEmpty)
        this.authService.userThatLogin(res.list[0])
        this.router.navigate(['/admin']);
      }
    })
   
  }

}
