import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';

import { UserModule } from './../user/user.module';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { writerRoutes } from './writer.routes';

import { WriterComponent } from './writer.component';
import { AutoHeightDirective } from './auto-height.directive';
import { ScriptCanvasComponent } from './script-canvas/script-canvas.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserModule,
    RouterModule.forChild(writerRoutes),
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot()
  ],
  declarations: [
  	WriterComponent,
  	AutoHeightDirective,
  	ScriptCanvasComponent
  ]
})
export class WriterModule { }
