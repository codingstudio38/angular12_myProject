import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { UserListComponent } from './user-list/user-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { ChildComponent } from './child/child.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { UsdInrPipe } from './pipes/usd-inr.pipe';
import { FormComponentComponent } from './form-component/form-component.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RedElDirective } from './red-el.directive';
import { FooterComponent } from './footer/footer.component';
import { TestComponent } from './test/test.component';
import { HttpClientModule } from '@angular/common/http';

import { UsersModule } from './users/users.module';

 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    StudentlistComponent,
    UserListComponent,
    ChildComponent,
    UserdetailsComponent,
    UsdInrPipe,
    FormComponentComponent,
    RedElDirective,
    FooterComponent,
    TestComponent,
  ], 
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatBadgeModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule,
    UsersModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
