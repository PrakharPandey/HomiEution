import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterAsTeacherComponent } from './teacher/register-as-teacher/register-as-teacher.component';
import { RegisterAsStudentComponent } from './student/register-as-student/register-as-student.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path: '' , redirectTo: '/main' ,pathMatch:'full'},
  {path: 'main', component: MainComponent},
  {path: 'registerasteacher', component: RegisterAsTeacherComponent },
  {path: 'registerasstudent', component: RegisterAsStudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})

export class AppRoutingModule { }
