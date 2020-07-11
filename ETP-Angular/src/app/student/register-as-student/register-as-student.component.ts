import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-as-student',
  templateUrl: './register-as-student.component.html',
  styleUrls: ['./register-as-student.component.css'],
  providers:[StudentService]
})
export class RegisterAsStudentComponent implements OnInit {

  constructor(private registerasstudentservice: StudentService , private router:Router) {} 

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
      previousResult: null
    }),
    class: null,
    school: null,
    parentRegisterFlag: null,
    previousResult: null,
    introduction: null,
    parentUniqueID: null,
    parentPhoneNumber: null,
    uploadPhoto: null
    };

  ngOnInit(): void {
  }
  register(request: any){
    this.registerasstudentservice.registerAsStudent(request).subscribe(response => {
      if(response){
        alert("Registered Successfully");
      //  this.data = new Object();
      }
    })
  }

  onAdd(){
    this.data.subjects.push({
      subject: null,
      previousResult: null
    });
  }

  onDelete(event){
    this.data.subjects.splice(event, 1);
  }
}