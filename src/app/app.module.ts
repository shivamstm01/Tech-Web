import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { NgbDropdownModule, NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { InterceptorInterceptor } from './Service/interceptor.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,NgbDropdownModule,NgbNavModule,FormsModule,HttpClientModule,
  ],
  providers: [
    // Provide the interceptor
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorInterceptor, multi: true }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
