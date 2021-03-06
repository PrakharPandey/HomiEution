import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import {Router} from '@angular/router';

@Component({
selector: 'app-rate-teacher',
templateUrl: './rate-teacher.component.html',
styleUrls: ['./rate-teacher.component.css']
})
export class RateTeacherComponent implements OnInit {

constructor(private teacherservice: TeacherService , private router:Router) {} 
ngOnInit(): void {
}
public data = {
firstName: null,
avgRating: null,
postalCode: null,
address: null,
teacherCode: null,
experience: null,
rating: null,
feedBack: null,
uploadPhoto: null
};

show: boolean = false;

submit(request: any){
this.teacherservice.rateATeacher(request).subscribe(response => {
if(response){
alert("Successfully Done");
}
})
}
search(request: any){
this.teacherservice.viewTeacherProfile(request).subscribe(response => {
if(response){
this.data = response;
this.show = true;
}
})
}
}
