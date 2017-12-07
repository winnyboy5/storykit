import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserModule } from './user/user.module';
import { FormsModule }   from '@angular/forms'; 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './user/auth.service';
import { WriterComponent } from './writer/writer.component';



@NgModule({
  declarations: [
    AppComponent,
    WriterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
