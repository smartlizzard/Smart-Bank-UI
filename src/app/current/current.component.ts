import { Component, OnInit } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { Observable } from 'rxjs';
import { HttpClientService } from '../service/http-client.service';
import { PrimaryTransactionList } from '../interfaces/primarytransaction';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  public currentamount: any;
  showMyContainer: boolean = false;

  datasource = [];
  primaryTransationList = [];


  displayedColumns = ['id', 'date', 'description', 'amount', 'availableBalance'];

  constructor(private clientservice: HttpClientService) { }

  ngOnInit() {
    //console.log(" dsfhsdfhusdhf   ")
    this.clientservice.getPrimaryTransactionList().subscribe(resp => {
      //console.log(result)
      ///capture the primary account balance
      this.primaryTransationList = resp;
      (this.primaryTransationList.filter
        (resp => resp.primaryAccount.accountBalance).forEach(balance => {
          this.currentamount = balance.primaryAccount.accountBalance
        }));

    }, error => {
      console.log("something wrong")
    });



  }

  getCurrentTransactionList() {
    console.log(" dsfhsdfhusdhf   ")
    this.clientservice.getPrimaryTransactionList().subscribe(result => {
      //console.log(result)
      this.datasource = result;
      console.log(this.datasource);

    }, error => {
      console.log("something wrong")
    });
  }

  getCurrentTransactions() {
    console.log("current")
    this.getCurrentTransactionList()
    this.showMyContainer = !this.showMyContainer;

  }


}
