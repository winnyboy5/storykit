import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { userRoutes } from './user.routes';
import { AuthService } from './auth.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { HeaderNavComponent } from './header-nav/header-nav.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    RouterModule.forChild(userRoutes)
  ],
  declarations: [LoginComponent, DashboardComponent, HeaderNavComponent],
  providers: [AuthService]
})
export class UserModule { }
