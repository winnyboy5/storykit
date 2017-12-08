import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WriterComponent } from './writer/writer.component';

const routes: Routes = [
  { path: '', redirectTo: '/user/dashboard', pathMatch: 'full' },
  { path: 'user', loadChildren: 'app/user/user.module#UserModule'},
  { path: 'writer', loadChildren: 'app/writer/writer.module#WriterModule'}
];

@NgModule({
	imports: [ RouterModule.forRoot(routes) ],	
  	exports: [ RouterModule ]
})
export class AppRoutingModule { }
