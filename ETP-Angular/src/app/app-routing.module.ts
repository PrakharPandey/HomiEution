import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterAsTeacherComponent } from './register-as-teacher/register-as-teacher.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'' , redirectTo: '/Main' ,pathMatch:'full'},
{path:'Main', component:MainComponent},
  { path: 'registerasteacher', component: RegisterAsTeacherComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  
  ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})

export class AppRoutingModule { }
