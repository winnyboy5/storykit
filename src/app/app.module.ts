import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserModule } from './user/user.module';
import { WriterModule } from './writer/writer.module';  

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './user/auth.service';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
