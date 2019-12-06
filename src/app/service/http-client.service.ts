import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SavingTransactionList } from '../interfaces/savingtransaction';
import { Observable } from 'rxjs';
import { PrimaryTransactionList } from '../interfaces/primarytransaction';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';
import { Accountdetails } from '../interfaces/accountdetails';
import { PresentAddress } from '../interfaces/presentaddress';
import { PermanentAddress } from '../interfaces/permanentaddress';

export class UserData {
  constructor(
    public firstName: string,
    public lastName: string,
    public phone: string,
    public email: string,
    public username: string,
    public password: string
  ) { }
}

var balance: any;


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  private pTransactions: Observable<PrimaryTransactionList[]>;

  constructor(private httpClient: HttpClient) { }

  getUser() {
    console.log("test call");
  }

  public createUser(userdata:UserData):Observable<UserData> {
    return this.httpClient.post<UserData>("smart-bank://smart-bank-service:8090/register/",userdata)
    //.pipe(
    
  }
  public getSavingBalance() {

    return this.httpClient.get("smart-bank://smart-bank-service:8090/account/savingAmount");

  }
  /////check here for current account transaction use this
  public getSavingsTransactionList(): Observable<SavingTransactionList[]> {
    console.log("getSavingsTransactionList")
    return this.httpClient.get<SavingTransactionList[]>("smart-bank://smart-bank-service:8090/account/transctionList/savings");
  }

  public getPrimaryTransactionList(): Observable<PrimaryTransactionList[]> {
    console.log("--HttpClientService---getPrimaryTransactionList")
    return this.httpClient.get<PrimaryTransactionList[]>("smart-bank://smart-bank-service:8090/account/transctionList/current");
  }
  public getAccountDetails(): Observable<Accountdetails[]>{
    return this.httpClient.get<Accountdetails[]>("smart-bank://smart-bank-service:8090/userAccountDetails");
  }
  
  public getPresentAddress():Observable<PresentAddress>{
    console.log("00000000000000")
return this.httpClient.get<PresentAddress>("smart-bank://smart-bank-service:8090/userInfo/getPresentAddress");
  }
  public getPermanentAddress():Observable<PermanentAddress>{
    return this.httpClient.get<PermanentAddress>("smart-bank://smart-bank-service:8090/userInfo/getPermanentAddress");
      }

      public getUserData():Observable<UserData>{
        ///http://localhost:8090/userInfo/getUserData
        return this.httpClient.get<UserData>("smart-bank://smart-bank-service:8090/userInfo/getUserData");
      }
}
