import { Component, OnInit } from '@angular/core';
import { HttpClientService } from '../service/http-client.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { SavingTransactionList } from '../interfaces/savingtransaction';



@Component({
  selector: 'app-savings',
  templateUrl: './savings.component.html',
  styleUrls: ['./savings.component.css']
})
export class SavingsComponent implements OnInit {
  showMyContainer: boolean = false;
  //dataSource = new TransactionDataSource(this.clientservice);
  //displayedColumns = ['Id', 'Date', 'Description', 'Type','Amount','AvailableBalance'];
  public savingsamount: any;
  public savingsTransactionList = [];



  constructor(private clientservice: HttpClientService) { }

  ngOnInit() {
    this.clientservice.getSavingBalance().subscribe(data => {
      this.savingsamount = data;

    }
      , error => { console.log("some error") }
    );
  }
  ////this is used for tradional fetching
  getSavingsTransactionList() {
    console.log("savings2")
    this.clientservice.getSavingsTransactionList().subscribe(data => {
      //console.log(data)
      this.savingsTransactionList = data;
    }, error => {
      console.log("error")
    }

    )
  }
  getSavingsTransactions() {
    console.log("savings")
    this.getSavingsTransactionList()
    this.showMyContainer = !this.showMyContainer;
   
}
}
