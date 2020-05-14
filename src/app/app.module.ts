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

//Services
import { ProcessHttpMsgServiceService } from './services/process-http-msg-service.service';
import { UserLoginServiceService } from './services/user-login-service.service';
// import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    DonateComponent,
    PageNotFoundComponent,
    NavbarComponent,
    FooterComponent,
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
