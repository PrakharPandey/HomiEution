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
   feedBack: null
    };

  submit(request: any){
    this.teacherservice.rateATeacher(request).subscribe(response => {
      if(response){
        alert("Successfully Done");
      //  this.data = new Object();
      }
    })
  }
  search(request: any){
    this.teacherservice.searchTeacher(request).subscribe(response => {
      if(response){
        
      //  this.data = new Object();
      }
    })
  }
}
