import { Injectable } from '@angular/core';
import { IUser } from './user.model';

@Injectable()
export class AuthService {
  	currentUser:IUser
	loginUser(userEmail: string, password: string){
		this.currentUser = {
			id: 1,
			userName: 'winnyboy5',
			firstName: 'John',
			lastName: 'Papa',
			email: userEmail,
			password: 'c06db68e819be6ec3d26c6038d8e8d1f'
		}
	}

	isAuthenticated(){
		return !!this.currentUser;
	}

	updateCurrentUser(firstName:string, lastName:string){
		this.currentUser.firstName = firstName
		this.currentUser.lastName = lastName
	}

}
