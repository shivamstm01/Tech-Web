import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component';
import { RegisterAuthComponent } from './register-auth/register-auth.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [{path:'Course',component:CourseComponent},
{path:'register',component:RegisterAuthComponent},
{path:'profile',component:ProfileComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
