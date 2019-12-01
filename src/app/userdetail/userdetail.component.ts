import { Component, OnInit } from '@angular/core';
import { HttpClientService, UserData } from '../service/http-client.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  userdata: UserData = new UserData("","","","","","");
  public Accountdetails=[];
  public presentAddress :any ;
  public savingsAccountNumber : number;
  public currentAccountNumber : number;
  savingsAccountBalance : any;
  currentAccountBalance : any;
  savingsAccountOD:any;
  currentAccountOD:any;
  public UserData;
  
  
  

  constructor(private httpClient:HttpClientService) { }

  ngOnInit() {
   this.getAccountDetails();
    this.getPresentAddress();
    this.getUserData();
  }
  // getPresentAddress(){
  //   console.log("hi")
  // }
  getAccountDetails(){
    this.httpClient.getAccountDetails().subscribe(data =>{
      this.Accountdetails=data;
      this.savingsAccountNumber=this.Accountdetails[0].accountNumber;
      this.savingsAccountBalance=this.Accountdetails[0].accountBalance;
      this.savingsAccountOD=this.Accountdetails[0].dateOfOpen;
      this.currentAccountNumber=this.Accountdetails[1].accountNumber;
      this.currentAccountBalance=this.Accountdetails[1].accountBalance;
      this.currentAccountOD=this.Accountdetails[1].dateOfOpen;
      console.log("-----------"+this.savingsAccountNumber)
      console.log("----CurrentAccountNumber-------"+this.currentAccountNumber)
    },error=>{
    }
    )
  }


  getPresentAddress(){
    console.log("--------------")
     this.httpClient.getPresentAddress().subscribe(data =>{
      console.log(data)
      this.presentAddress=data;
      console.log("----presentAddress-------"+this.presentAddress.houseNo)
    },error=>{
      console.log("----error-------"+error)
    })
  }

  getUserData(){
    this.httpClient.getUserData().subscribe(data=>{
      console.log("userDat"+data);
      this.UserData=data;


    },error=>{
 console.log("error Occred"+error)
    })
  }
}
