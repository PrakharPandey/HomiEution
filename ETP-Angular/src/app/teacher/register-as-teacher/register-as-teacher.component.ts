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
    age: null,
    subjects: new Array({
      subject: null,
      experience: null,
      proficiency: null
    }),
    preferredLanguage: null,
    achivements: null,
    description: null,
    uploadPhoto: null
    };

  ngOnInit(): void {
  }
  register(request: any){
    this.registerasteacherservice.registerAsTeacher(request).subscribe(response => {
      if(response){
        alert("Registered Successfully");
      //  this.data = new Object();
      }
    })
  }

  onAdd(){
    this.data.subjects.push({
      subject: null,
      experience: null,
      proficiency: null
    });
  }

  onDelete(event){
    this.data.subjects.splice(event, 1);
  }
}
