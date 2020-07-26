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
    file: null
  };

  image: File = null;
  city: any = null;
  state: any = null;
  src: String = "assets/dummy.png";

  ngOnInit(): void {
  }
  register(request: any){
    const formData = new FormData();
    if(this.image)
      formData.append('file', this.image, this.image.name);
    if(this.state)
      this.data.address = this.data.address + ", " + this.state;
    if(this.city)
      this.data.address = this.data.address + ", " + this.city;
    formData.append('firstName', this.data.firstName);
    formData.append('lastName', this.data.lastName);
    formData.append('email', this.data.email);
    formData.append('phoneNumber', this.data.phoneNumber);
    formData.append('address', this.data.address);
    formData.append('postalCode', this.data.postalCode);
    formData.append('age', this.data.age);
    formData.append('subjects', this.data.subjects.toString());
    formData.append('relation', this.data.relation);
    formData.append('aboutYou', this.data.aboutYou);
    formData.append('aboutStudent', this.data.aboutStudent);
    formData.append('isRegistered', this.data.isRegistered);
    formData.append('profession', this.data.profession);
    formData.append('studentUniqueID', this.data.studentUniqueID);
    formData.append('studentName', this.data.studentName);
    formData.append('schoolName', this.data.schoolName);

    this.registerasteacherservice.registerAsTeacher(formData).subscribe(response => {
      if(response){
        alert("Registered Successfully");
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

  onUpload(item) {
    this.image = <File>item.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(item.target.files[0]); 
    reader.onload = (_event) => { 
      this.src = reader.result as string; 
    }
  }
}
