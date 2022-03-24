import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AddUserComponent} from "./user/add-user/add-user.component";
import {ListUserComponent} from "./user/list-user/list-user.component";
import {EditUserComponent} from "./user/edit-user/edit-user.component";
import { PartnerComponent } from './partner/filter-partner/partner.component';
import { UploadPartnerComponent } from './partner/upload-partner/upload-partner.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'edit-user', component: EditUserComponent },
  { path: 'filter-partner', component: PartnerComponent },
  { path: 'upload-partner', component: UploadPartnerComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
