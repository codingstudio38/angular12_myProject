import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  constructor(private cookieService: CookieService) { }

  ngOnInit(): void {
  }

  userLogin(item: any) {
    console.log(item.value);
    console.log(item.controls);
  }


  reactiveForm = new FormGroup({
    user: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    demoselect: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]+$'), Validators.minLength(10), Validators.maxLength(10)]),
    userpass: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)])

  })
  carr: any = '';
  larr: any = ''; 
  reactiveF() {
    this.cookieService.deleteAll();
    localStorage.removeItem('cookie_name');
    localStorage.removeItem('cookie_email');
    localStorage.removeItem('cookie_phone');
    this.cookieService.set('cookie_name', this.reactiveForm.value.user);
    this.cookieService.set('cookie_email', this.reactiveForm.value.email);
    this.cookieService.set('cookie_phone', this.reactiveForm.value.phone);
    localStorage.setItem('cookie_name', this.reactiveForm.value.user);
    localStorage.setItem('cookie_email', this.reactiveForm.value.email);
    localStorage.setItem('cookie_phone', this.reactiveForm.value.phone);
    var cname = this.cookieService.get('cookie_name');
    var cemail = this.cookieService.get('cookie_email');
    var cphone = this.cookieService.get('cookie_phone');
    var lname = localStorage.getItem('cookie_name');
    var lemail = localStorage.getItem('cookie_email');
    var lphone = localStorage.getItem('cookie_phone');
    this.carr = { 'name': cname, 'email': cemail, 'phone': cphone };
    this.larr = { 'name': lname, 'email': lemail, 'phone': lphone };
    this.reactiveForm.reset();
  }
  get user() {
    return this.reactiveForm.get('user');
  }
  get email() {
    return this.reactiveForm.get('email');
  }
  get demoselect() {
    return this.reactiveForm.get('demoselect');
  }
  get userpass() {
    return this.reactiveForm.get('userpass');
  }
  get phone() {
    return this.reactiveForm.get('phone');
  }

  memberData = [
    { name: 'vk', age: 28, email: 'vk@gmail.com' },
    { name: 'Bidyut', age: 24, email: 'bidyut@gmail.com' },
    { name: 'Vidyut', age: 25, email: 'vidyut@gmail.com' },
    { name: 'bk', age: 29, email: 'bk@gmail.com' },
  ];








}
