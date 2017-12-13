import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UserModule } from './../user/user.module';
import { writerRoutes } from './writer.routes';

import { WriterComponent } from './writer.component';
import { AutoHeightDirective } from './auto-height.directive';
import { ScriptPagerDirective } from './script-pager.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserModule,
    RouterModule.forChild(writerRoutes)
  ],
  declarations: [
  	WriterComponent,
  	AutoHeightDirective,
  	ScriptPagerDirective
  ]
})
export class WriterModule { }
