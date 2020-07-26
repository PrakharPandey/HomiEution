import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-search-teacher',
  templateUrl: './search-teacher.component.html',
  styleUrls: ['./search-teacher.component.css'],
  providers:[TeacherService]
})
export class SearchTeacherComponent implements OnInit {

  constructor(private teacherservice: TeacherService , private router:Router) {} 
    public data = {
  	subject: null
    };

    showData: any

  ngOnInit(): void {
  }

search(request: any){
    this.teacherservice.searchTeacher(request).subscribe(response => {
      if(response){
        this.showData = response;
      }
    })
  }

  onClick(url){
  this.router.navigate([url]);
}

nameEntered() {
  this.showData = null;
}
}
