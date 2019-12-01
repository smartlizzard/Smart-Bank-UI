import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserdetailComponent } from './userdetail/userdetail.component';
import { AdduserComponent } from './adduser/adduser.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthgaurdService } from './service/authgaurd.service';
import { SavingsComponent } from './savings/savings.component';
import { CurrentComponent } from './current/current.component';

const routes: Routes = [
  
  { path:'', component: UserdetailComponent,canActivate:[AuthgaurdService] },
  { path:'adduser', component: AdduserComponent},
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent ,canActivate:[AuthgaurdService] },
  { path: 'savings', component: SavingsComponent ,canActivate:[AuthgaurdService] },
  { path: 'current', component: CurrentComponent ,canActivate:[AuthgaurdService] },
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
