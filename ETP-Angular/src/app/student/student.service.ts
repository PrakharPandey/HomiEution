import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import 'rxjs/Rx';
import { environment, student_ENV } from '../../environments/environment'

@Injectable({
providedIn: 'root'
})
export class StudentService {

constructor(private http: HttpClient) {}

registerAsStudent(data:any): Observable<any> {
return  this.http.post(environment.serviceURL + student_ENV.registerAsStudent, data)
.map((response:any) => {
return response;
});
}

}
