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
    achievements: null,
    description: null,
    file: null
  };

  image: File = null;
  city: any = null;
  state: any = null;
  src: String = "assets/dummy.png";
  regularRegistrationFlag: boolean = false;

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
    formData.append('preferredLanguage', this.data.preferredLanguage);
    formData.append('achievements', this.data.achievements);
    formData.append('description', this.data.description);

    this.registerasteacherservice.registerAsTeacher(formData).subscribe(response => {
      if(response){
        alert("Registered Successfully");
      }
    })
  }

  onUpload(item) {
    this.image = <File>item.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(item.target.files[0]); 
    reader.onload = (_event) => { 
      this.src = reader.result as string; 
    }
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

  switchtoRegister() {
    this.regularRegistrationFlag = !this.regularRegistrationFlag;
  }
}
