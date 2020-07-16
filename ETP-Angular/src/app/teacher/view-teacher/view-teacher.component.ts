import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-teacher',
  templateUrl: './view-teacher.component.html',
  styleUrls: ['./view-teacher.component.css'],
  providers:[TeacherService]
})
export class ViewTeacherComponent implements OnInit {

  constructor(private teacherservice: TeacherService , private router:Router) {} 
    public data = {
  	firstName: null
    };

    showData: any

  ngOnInit(): void {
  }

search(request: any){
    this.teacherservice.viewTeacherProfile(request).subscribe(response => {
      if(response){
        this.showData = response;
      }
    })
  }
}