import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-view-teacher',
  templateUrl: './view-teacher.component.html',
  styleUrls: ['./view-teacher.component.css']
})
export class ViewTeacherComponent implements OnInit {

  constructor(private teacherservice: TeacherService , private router:Router) {} 

  ngOnInit(): void {
  }
  public data = {
  	teacherName: null
    };
  search(request: any){
    this.registerasteacherservice.searchTeacher(request).subscribe(response => {
      if(response){
        
      //  this.data = new Object();
      }
    })
  }
}
