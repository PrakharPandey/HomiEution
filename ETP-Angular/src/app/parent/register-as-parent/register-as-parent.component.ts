import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ParentService } from '../parent.service';

@Component({
  selector: 'app-register-as-parent',
  templateUrl: './register-as-parent.component.html',
  styleUrls: ['./register-as-parent.component.css']
})
export class RegisterAsParentComponent implements OnInit {

constructor(private registerasteacherservice: ParentService , private router:Router) {} 

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
      previousResult: null,
    }),
    relation: null,
    aboutYou: null,
    aboutStudent: null,
    uploadPhoto: null,
    isRegistered: null,
    profession: null,
    studentUniqueID: null,
    studentName: null,
    schoolName: null,
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
      previousResult: null,
    });
  }

  onDelete(event){
    this.data.subjects.splice(event, 1);
  }
}
