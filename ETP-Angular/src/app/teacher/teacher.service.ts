import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import 'rxjs/Rx';
import { environment, teacher_ENV } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) {}

  registerAsTeacher(data:any): Observable<any> {
    return  this.http.post(environment.serviceURL + teacher_ENV.registerAsTeacher, data)
    .map((response:any) => {
    return response;
    });
    }
   
    searchTeacher(data:any): Observable<any> {
    return  this.http.post(environment.serviceURL + 'teacher/searchTeacher', data)
    .map((response:any) => {
    return response;
    });
    }

  viewTeacherProfile(data:any): Observable<any> {
    return  this.http.post(environment.serviceURL + 'teacher/viewTeacher', data)
    .map((response:any) => {
    return response;
    });
    }  
    
}
