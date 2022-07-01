import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  testtitle = 'Hii user list';

  testValue() {
    return "This is function data";
  } 

  getName(par1: boolean, par2: number, par3: string) {
    alert(par1);
    if (par1 == true) {
      setTimeout(() => {
        alert(par2);
        alert(par3);
      }, 2000);
    }
  }

  getData(val: any) {
    alert(val);
  }

  displayVal = "";
  getInputValue(val: any) {
    this.displayVal = val;
  }


  incrise = 0;
  counter(type: string) {
    type === 'add' ? this.incrise++ : this.incrise--;
  }

  nameI = 'vidyut';
  disable = false;
  show = "yes";
  color = "red";
  user = ['Bidyut', 'Vidyut', 'Vk', 'Bk', 'Angular', 'PHP', 'Javascript'];
  userDetails = [
    { name: 'Bidyut', email: 'mondalbidyut@gmail.com', phone: '1234567890' },
    { name: 'Vidyut', email: 'Vidyut@gmail.com', phone: '000000000' },
    { name: 'Bk', email: 'Bk@gmail.com', phone: '1111111111' },
    { name: 'Vk', email: 'Vk@gmail.com', phone: '2222222222' },
  ];
  newArray = [
    { name: 'Bidyut', phone: '1234567890', socialAcc: ['facebook', 'instagram', 'gmail'] },
    { name: 'Vidyut', phone: '000000000', socialAcc: ['youtube', 'yahoo', '.in'] },
    { name: 'Bk', phone: '1111111111', socialAcc: ['tiktok', 'githube', 'gmail'] },
    { name: 'Vk', phone: '2222222222', socialAcc: ['skypey', 'instagram', 'gmail'] },
  ]
  bgcolor = "green";
  color1 = "red";
  updateColor() {
    this.color1 = "green";
    this.bgcolor = "black";
  }
  formData: any = {};
  getFormData(data: NgForm) {
    this.formData = data.value;
  }

  display = true;
  toogle() {
    this.display = !this.display;
  }

  list: any[] = [];
  addTask(item: any) {
    this.list.push({ id: this.list.length, name: item });
    //console.log(this.list);
  }

  removeId(id: number) {
    console.log(id);
    this.list = this.list.filter(item => item.id! == id);
    console.log(this.list);
  }
  binding_name: any;

  getvar(item: HTMLInputElement) {
    console.log(item.placeholder);
    console.log(item.name);
    console.log(item.type);
    console.log(item.value);
  }

  pipeDemo: any = "Angular Pipe Test";
  pipeDemo1: any = Date();
  userJ = {
    name: 'bidyut',
    age: 23
  }
  capString(item: string) {
    return item.toUpperCase();
  }










  constructor() { }

  ngOnInit(): void {
  }

}
