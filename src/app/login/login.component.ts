import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = ''
  password = ''
  invalidLogin = false
  status:string

  constructor(private router: Router,
    private authservice: AuthService) { }

  ngOnInit() {
  }

//////used for server connection //////////////////////////
  checkLogin() {
    (this.authservice.authenticate(this.username, this.password).subscribe(
      data => {
        this.router.navigate([''])
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true

      }
    )
    );

  }

}
//////used for hardcoded password
//   checkLogin() {
//     if (this.authservice.authenticate(this.username, this.password)
//     ) {
//       this.router.navigate([''])
//       this.invalidLogin = false
//     } else
//       this.invalidLogin = true
//   }

// }