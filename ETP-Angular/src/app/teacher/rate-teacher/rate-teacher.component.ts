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
  	teacherName: null
    };

  submit(request: any){
    this.registerasteacherservice.rateATeacher(request).subscribe(response => {
      if(response){
        alert("Successfully Done");
      //  this.data = new Object();
      }
    })
  }
  search(request: any){
    this.registerasteacherservice.searchTeacher(request).subscribe(response => {
      if(response){
        
      //  this.data = new Object();
      }
    })
  }
}
