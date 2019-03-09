import { Injectable } from '@angular/core';
import { Job } from './model/job';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';

interface JobsListResponse {
	results: Job[];
}

@Injectable()
export class JobListService {
	jobsList: Job[];
  /*jobsList: Job[] = [
    {id: 101, role: 'Angular Application Architect', company: 'Mindtree', location: 'UK', salary: 56000, applicantCount: 0},
    {id: 102, role: 'Angular Web Developer', company: 'Mindtree', location: 'UK', salary: 56000, applicantCount: 0},
    {id: 103, role: 'Angular Test Lead', company: 'BBC', location: 'Manchester', salary: 56000, applicantCount: 0},
    {id: 104, role: 'Angular Test Engineer', company: 'Mindtree', location: 'UK', salary: 56000, applicantCount: 0},
    {id: 105, role: 'Angular Automation Tester', company: 'Mindtree', location: 'UK', salary: 56000, applicantCount: 0},
    {id: 106, role: 'Angular BDD Test Engineer', company: 'Mindtree', location: 'UK', salary: 56000, applicantCount: 0}
  ];*/
  
  SERVICE_BASE_URL = "http://localhost:8080/jobs";

  constructor(private http:HttpClient) { }
  
  getJobList() : Observable<Job[]> {
  	return <Observable<Job[]>>this.http.get(this.SERVICE_BASE_URL);
  }

  saveChanges(job:Job) : Observable<Job[]> {
  	/*var index:number = this.jobsList.indexOf(job);
  	if(index >= 0){
  		this.jobsList[index] = job;
  	}*/
  	return <Observable<Job[]>>this.http.put(this.SERVICE_BASE_URL + "/" + job.id, job);
  }
  
  deleteJob(job:Job) : Observable<Job[]> {
  	/*var index:number = this.jobsList.indexOf(job);
  	if(index >= 0){
  	 console.log('New job selected, role = ' + job.role);
  		this.jobsList.splice(index, 1);
  	}*/
  	return <Observable<Job[]>>this.http.delete(this.SERVICE_BASE_URL + "/" + job.id);
  }
}
