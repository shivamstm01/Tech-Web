import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseModule } from './course/course.module';
import { HomeComponent } from './Components/home/home.component';

const routes: Routes = [
  {path:'User',loadChildren:()=>import('./course/course.module').then(m=>m.CourseModule)},
  {path:'home',component:HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
