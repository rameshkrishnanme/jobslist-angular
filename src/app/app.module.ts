import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ManagerComponent } from './manager/manager.component';
import { CONST_ROUTING } from './app.routing';
import { JobsListComponent } from './jobs-list/jobs-list.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { JobListService } from './job-list.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ApplicantComponent,
    ManagerComponent,
    JobsListComponent,
    JobDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CONST_ROUTING,
    HttpClientModule
  ],
  providers: [JobListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
