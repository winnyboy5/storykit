import { Component } from '@angular/core';
import { AuthService } from './user/auth.service';
import { Router } from '@angular/router';
declare var $: any;
declare var jquery: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private authService:AuthService, private router:Router){

  }

  authenticationCheck(){
  	if(!this.authService.isAuthenticated()){
  		this.router.navigate(['user/login']);
  	}
  }
      
}
