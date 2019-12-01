import { Component, OnInit } from '@angular/core';
import { HttpClientService, UserData } from '../service/http-client.service';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  userdata: UserData = new UserData("","","","","","");
  erroMessage:String ;
  successMessage:String ;

  constructor(private httpClientService:HttpClientService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }
  createUser(): void {
    this.httpClientService.createUser(this.userdata)
        .subscribe( data =>{
          this.successsmsg();
         // alert(data)
          ///alert("user Succesfully Registerd")
        },error=>{
          //this.erroMessage=error.message
          //this.erroMessage="Some Error Occured"
          this.errorsmsg();
        }
        );

  };
//////////fute implimentation
  // private handelError(errorResponse:HttpErrorResponse){
  //   if (errorResponse.error instanceof ErrorEvent){
  //     alert('Client Side Error:'+errorResponse.error.message)
  //   }else{
  //     alert('Server Side Error:'+errorResponse)
  //   }
  // }
  

  errorsmsg(){  
    this.toastr.error("Some Error Occured",'Error')
}
successsmsg(){  
  this.toastr.success("You Are Succesfully Registerd")
}
}