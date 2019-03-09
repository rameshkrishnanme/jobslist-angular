import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../model/job';
import { JobListService } from '../job-list.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styles: []
})
export class JobsListComponent implements OnInit {

  @Input() userRole: string;

  jobsList: Job[];

  selectedJob: Job;

  constructor(private jobListService:JobListService) { }

  ngOnInit() {
  	this.jobListService.getJobList().subscribe(
  		(res) => {
  			this.jobsList = res;
  		},
  		(err : HttpErrorResponse) => {
  			console.log("http err " + err);
  			console.log("backend returned ${err.status}, body was : ${err.error}");
  		}
  	);
  }

  onSelectJob ( newSelectedJob: Job ) {
    console.log('New job selected, role = ' + newSelectedJob.role);
    this.selectedJob = newSelectedJob;
    return false;
  }
  
  onDeleteJob ( deleteJob: Job ) {
  	//this.jobListService.deleteJob(deleteJob);
  	this.jobListService.deleteJob(deleteJob).subscribe(
  		(res) => {
  			this.jobsList = res;
  		},
  		(err : HttpErrorResponse) => {
  			console.log("http err " + err);
  			
  			console.log("backend returned ${err.status}, body was : ${err.error}");
  		}
  	);
  	this.selectedJob = null;
    return false;
  }
}
