import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { LoginComponent } from './login/login.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import {routing} from "./app.routing";
import {ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "./service/api.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {TokenInterceptor} from "./core/interceptor";
import { UploadPartnerComponent } from './partner/upload-partner/upload-partner.component';
import { PartnerComponent } from './partner/filter-partner/partner.component';
import { PartnerService } from './service/partner.service';

@NgModule({
  declarations: [
    AppComponent,
    ListUserComponent,
    LoginComponent,
    AddUserComponent,
    EditUserComponent,
    PartnerComponent,
    UploadPartnerComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService,PartnerService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
