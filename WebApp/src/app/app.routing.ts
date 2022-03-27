import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { PartnerComponent } from './partner/filter-partner/partner.component';
import { UploadPartnerComponent } from './partner/upload-partner/upload-partner.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'filter-partner', component: PartnerComponent },
  { path: 'upload-partner', component: UploadPartnerComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
