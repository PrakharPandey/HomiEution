import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../teacher.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-as-teacher',
  templateUrl: './register-as-teacher.component.html',
  styleUrls: ['./register-as-teacher.component.css'],
  providers:[TeacherService]
})
export class RegisterAsTeacherComponent implements OnInit {

  constructor(private registerasteacherservice: TeacherService , private router:Router) {} 
  public data = {
    firstName: null,
    lastName: null,
    email: null,
    phoneNumber: null,
    address: null,
    postalCode: null,
    subjects: null
    };

  ngOnInit(): void {
  }
  register(request: any){
    this.registerasteacherservice.registerAsTeacher(request).subscribe(response => {
      if(response){
        alert("Registered Successfully");
        this.data = new Object();
      }
    })
  }
}
