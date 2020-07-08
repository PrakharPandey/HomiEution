import { Component, OnInit } from '@angular/core';
import { RegisterAsTeacherService } from './register-as-teacher.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register-as-teacher',
  templateUrl: './register-as-teacher.component.html',
  styleUrls: ['./register-as-teacher.component.css'],
  providers:[RegisterAsTeacherService]
})
export class RegisterAsTeacherComponent implements OnInit {

  constructor(private registerasteacherservice:RegisterAsTeacherService , private router:Router) {} 
  public data = {
    name: null,
    email: null,
    lastName: null,
    phoneNumber: null,
    address:null,
    postalCode:null
    };

  ngOnInit(): void {
  }
  register(obj:any){
    this.registerasteacherservice.registerAsTeacher(obj).subscribe(response=>{
      if(response!=undefined){
        alert("Registered Successfully");
      }
    })
  }
}
