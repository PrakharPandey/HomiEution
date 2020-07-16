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
    uploadPhoto: null,
    file: null
    };

    image: File = null;

  ngOnInit(): void {
  }
  register(request: any){
    const formData = new FormData();
    formData.append('file', this.image, this.image.name);
    formData.append('firstName', this.data.firstName);
    formData.append('lastName', this.data.lastName);
    formData.append('email', this.data.email);
    formData.append('phoneNumber', this.data.phoneNumber);
    formData.append('address', this.data.address);
    formData.append('postalCode', this.data.postalCode);
    formData.append('age', this.data.age);
    formData.append('subjects', this.data.subjects.toString());
    formData.append('class', this.data.class);
    formData.append('school', this.data.school);
    formData.append('parentRegisterFlag', this.data.parentRegisterFlag);
    formData.append('previousResult', this.data.previousResult);
    formData.append('introduction', this.data.introduction);
    formData.append('parentUniqueID', this.data.parentUniqueID);
    formData.append('parentPhoneNumber', this.data.parentPhoneNumber);

    this.registerasstudentservice.registerAsStudent(formData).subscribe(response => {
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

  onUpload(item) {
  this.image = <File>item.target.files[0];
  }

  onDelete(event){
    this.data.subjects.splice(event, 1);
  }
}