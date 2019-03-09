import { Routes, RouterModule } from '@angular/router';
import { ManagerComponent } from "./manager/manager.component";
import { ApplicantComponent } from "./applicant/applicant.component";
const MAINMENU_ROUTES: Routes = [
    //full : makes sure the path is absolute path
    { path: '', redirectTo: '/applicant', pathMatch: 'full' },
    { path: 'applicant', component: ApplicantComponent },
    { path: 'manager', component: ManagerComponent }
];
export const CONST_ROUTING = RouterModule.forRoot(MAINMENU_ROUTES);
