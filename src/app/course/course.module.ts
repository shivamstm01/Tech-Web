import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course/course.component';
import { RegisterAuthComponent } from './register-auth/register-auth.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CourseComponent,
    RegisterAuthComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,FormsModule
  ]
})
export class CourseModule { }
