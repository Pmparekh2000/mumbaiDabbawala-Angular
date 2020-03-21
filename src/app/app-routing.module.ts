import { PayOnlineComponent } from './pay-online/pay-online.component';
import { PayOfflineComponent } from './pay-offline/pay-offline.component';
import { HomeComponent } from './home/home.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { DabbawalaRegisterComponent } from './dabbawala-register/dabbawala-register.component';
import { DabbawalaLoginComponent } from './dabbawala-login/dabbawala-login.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'dabbawala-login',component: DabbawalaLoginComponent},
  {path: 'dabbawala-register',component: DabbawalaRegisterComponent},
  {path: 'user-login',component: UserLoginComponent},
  {path: 'user-register',component: UserRegisterComponent},
  {path: 'home', component: HomeComponent},
  {path: 'pay-offline', component:PayOfflineComponent},
  {path: 'pay-online', component:PayOnlineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DabbawalaLoginComponent, DabbawalaRegisterComponent, UserLoginComponent, UserRegisterComponent, HomeComponent, PayOfflineComponent, PayOnlineComponent];