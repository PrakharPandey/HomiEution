import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class RegisterAsTeacherService {
  //give the service url here
  private registerUrl = null;
  constructor(private http: HttpClient) {}
  registerAsTeacher(data:any): Observable<any> {
    return  this.http.post(this.registerUrl,data)
    .map((response:any)=>{ return response.json()});
    }
    
}
