//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//Components
import { DonateComponent } from './donate/donate.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { DabbawalaLoginComponent } from './dabbawala-login/dabbawala-login.component';

//Services
import { ProcessHttpMsgServiceService } from './services/process-http-msg-service.service';
import { UserLoginServiceService } from './services/user-login-service.service';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DonateComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
    UserLoginComponent,
    DabbawalaLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ ProcessHttpMsgServiceService, UserLoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
