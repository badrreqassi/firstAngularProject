import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { User } from 'src/data/userType';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  user:User|any;
  constructor( private authService: AuthServiceService ) { 
    this.user=authService.getUserThatLogin();
    console.log(this.user)
  }

  ngOnInit(): void {
  }

}
