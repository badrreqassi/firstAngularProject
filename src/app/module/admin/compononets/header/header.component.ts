import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private  authService :AuthServiceService ,private router:Router) { }

  ngOnInit(): void {
    console.log("hii anass")
  }

  logOut(){
    this.authService.logOut();
    this.router.navigate(['/login']);
  }

}
