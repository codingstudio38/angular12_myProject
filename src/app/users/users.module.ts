import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserloginComponent } from './userlogin/userlogin.component';
import { SigninComponent } from './signin/signin.component';



@NgModule({
  declarations: [
    UserloginComponent,
    SigninComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserloginComponent,
    SigninComponent,
  ]
})  
export class UsersModule {

}
