import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterAsTeacherComponent } from './teacher/register-as-teacher/register-as-teacher.component';
import { RegisterAsStudentComponent } from './student/register-as-student/register-as-student.component';
import { RegisterAsParentComponent } from './parent/register-as-parent/register-as-parent.component';
import { SearchTeacherComponent } from './teacher/search-teacher/search-teacher.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '' , redirectTo: '/main' ,pathMatch:'full'},
  {path: 'main', component: MainComponent},
  {path: 'registerasteacher', component: RegisterAsTeacherComponent },
  {path: 'registerasstudent', component: RegisterAsStudentComponent },
  {path: 'registerasparent', component: RegisterAsParentComponent },
  {path: 'searchteacher', component: SearchTeacherComponent },
  {path: 'contactus', component: ContactUsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})

export class AppRoutingModule { }
