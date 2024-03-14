import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course/course.component';
import { RegisterAuthComponent } from './register-auth/register-auth.component';
import { FormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    CourseComponent,
    RegisterAuthComponent,
  
    ProfileComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,FormsModule,
  ]
})
export class CourseModule { }
