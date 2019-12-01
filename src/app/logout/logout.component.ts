import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private autheservice: AuthService,
    private router: Router) { }

    ngOnInit() {
      this.autheservice.logOut();
      this.router.navigate(['login']);
    }
  
  }