import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

	constructor (private authService:AuthService, private router:Router){

	}

	login(formValues){
		console.log(formValues);
		this.authService.loginUser(formValues.userEmail, formValues.userPassword);
		this.router.navigate(['user/dashboard'])
	}

	cancel(){
		this.router.navigate(['user/dashboard'])
	}

}
