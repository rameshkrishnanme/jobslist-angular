import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../model/job';
import { JobListService } from '../jobs-list.service';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styles: []
})

export class JobDetailComponent implements OnInit {

  @Input() currentJob: Job;
  
  jobBeingEdited : Job;
  showEditMode:boolean = false;

  constructor(private jobListService:JobListService) { 
  }

  ngOnInit() {
  
  }
  
  switchToEditMode() {
    this.copyToEditableVersion();
  	this.showEditMode=true;
  }
  
  onSubmit() {
    this.copyToOriginalVersion();
  	this.jobListService.saveChanges(this.currentJob).subscribe(
  		(res) => {
  			this.showEditMode=false;
  		},
  		(err : HttpErrorResponse) => {
  			console.log("http err " + err);
  			console.log("backend returned ${err.status}, body was : ${err.error}");
  		}
  	);
  }
  
  copyToEditableVersion() {
  	this.jobBeingEdited = new Job();
  	this.jobBeingEdited.id = this.currentJob.id;
  	this.jobBeingEdited.role = this.currentJob.role;
  	this.jobBeingEdited.company = this.currentJob.company;
  	this.jobBeingEdited.location = this.currentJob.location;
  	this.jobBeingEdited.salary = this.currentJob.salary;
  	this.jobBeingEdited.applicantCount = this.currentJob.applicantCount;
  	
  }
  
  copyToOriginalVersion() {
  	this.currentJob.id = this.jobBeingEdited.id;
  	this.currentJob.role = this.jobBeingEdited.role;
  	this.currentJob.company = this.jobBeingEdited.company;
  	this.currentJob.location = this.jobBeingEdited.location;
  	this.currentJob.salary = this.jobBeingEdited.salary;
  	this.currentJob.applicantCount = this.jobBeingEdited.applicantCount;
  	this.jobBeingEdited = null;
  }
  

}
