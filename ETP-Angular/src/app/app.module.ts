import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterAsTeacherComponent } from './register-as-teacher/register-as-teacher.component';
import { RegisterAsStudentComponent } from './register-as-student/register-as-student.component';
import { RegisterAsParentComponent } from './register-as-parent/register-as-parent.component';
import { SearchTeacherComponent } from './search-teacher/search-teacher.component';
import { ViewTeacherComponent } from './view-teacher/view-teacher.component';
import { RateTeacherComponent } from './rate-teacher/rate-teacher.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterAsTeacherComponent,
    RegisterAsStudentComponent,
    RegisterAsParentComponent,
    SearchTeacherComponent,
    ViewTeacherComponent,
    RateTeacherComponent,
    ContactUsComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
