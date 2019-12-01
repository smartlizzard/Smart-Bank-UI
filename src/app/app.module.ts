import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import{FormsModule} from '@angular/forms';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdduserComponent } from './adduser/adduser.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { HttpInterceptorService } from './service/http-interceptor.service';
import { SavingsComponent } from './savings/savings.component';
import { CurrentComponent } from './current/current.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import {MatTableModule, MatInputModule, MatButtonModule, MatSelectModule, MatIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserdetailComponent,
    AdduserComponent,
    LoginComponent,
    LogoutComponent,
    SavingsComponent,
    CurrentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule, 
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatTableModule,
    ToastrModule.forRoot(  
      {  
        //positionClass:'bottom-center',  
        positionClass:'toast-top-center',
        closeButton: true,  
          
      }  
    )  

    
  ],
  providers: [{  
    provide:HTTP_INTERCEPTORS, useClass:HttpInterceptorService, multi:true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
