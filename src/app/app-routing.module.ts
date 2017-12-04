import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/user/dashboard', pathMatch: 'full' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule'}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],	
  	exports: [ RouterModule ]
})
export class AppRoutingModule { }
