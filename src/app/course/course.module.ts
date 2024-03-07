import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from './course/course.component';
import { RegisterAuthComponent } from './register-auth/register-auth.component';
import { FormsModule } from '@angular/forms';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentSucessComponent } from './payment-sucess/payment-sucess.component';
import { PaymentFailiureComponent } from './payment-failiure/payment-failiure.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    CourseComponent,
    RegisterAuthComponent,
    CheckoutComponent,
    PaymentSucessComponent,
    PaymentFailiureComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,FormsModule,
  ]
})
export class CourseModule { }
