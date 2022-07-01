import { Component } from '@angular/core';
import { UserdataService } from './services/userdata.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dataType } from './services/interfacepage';
import { HttpEvent, HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  services_users: any;

  constructor(private APIservice: UserdataService) {
    this.getUsers();
    this.services_users = APIservice.usersBy_service();
  } 
  Pdata = 10;
  Pdata2 = 20;
  updateData() {
    this.Pdata = Math.floor(Math.random() * 1000);
    this.Pdata2 = Math.floor(Math.random() * 2222);
  }

  title = 'angular 12';
  interpolation = 'This is first test';

  getValue() {
    return 'This is function data';
  }
  userDetails1 = [
    { name: 'Bidyut', email: 'mondalbidyut@gmail.com' },
    { name: 'Vidyut', email: 'Vidyut@gmail.com' },
    { name: 'Bk', email: 'Bk@gmail.com' },
    { name: 'Vk', email: 'Vk@gmail.com' },
  ];

  childData = "";
  updatecData(item: string) {
    this.childData = item;
  }

  api_postForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
    photo: new FormControl('', [Validators.required])
  })
  get name() {
    return this.api_postForm.get('name');
  }
  get email() {
    return this.api_postForm.get('email');
  }
  get password() {
    return this.api_postForm.get('password');
  }
  get photo() {
    return this.api_postForm.get('photo');
  }
  uploadFile(event: any): void {
    this.api_postForm.patchValue({
      photo: <File>event.target.files[0]
    });
  }

  api_users: any;
  emptybox: any;
  api_fatch_sms: any;
  getUsers() {
    this.APIservice.API_users().subscribe((response) => {
      this.emptybox = response;
      if (this.emptybox.status == 200) {
        this.api_users = this.emptybox.Alldata;
        this.api_fatch_sms = this.emptybox.message;
      } else {
        this.api_users = '';
        this.api_fatch_sms = this.emptybox.message;
      }
      this.emptyallsms();
    });
  }
  poststatus: any;
  deletestatus: any;
  poststatus_mss: any;
  deletestatus_mss: any;
  progress: number = 0;
  evenTotal: any;
  getUserFormData() {
    //alert();
    //console.log(this.api_postForm); return;
    const myForm = new FormData();
    myForm.append('Select_photo', this.api_postForm.get('photo')?.value);
    myForm.append('name', this.api_postForm.get('name')?.value);
    myForm.append('email', this.api_postForm.get('email')?.value);
    myForm.append('password', this.api_postForm.get('password')?.value);
    this.APIservice.saveUsers(myForm).subscribe((response: HttpEvent<any>) => {
      switch (response.type) {
        case HttpEventType.Sent:
          //console.log('Sent' + HttpEventType.Sent);
          break;
        case HttpEventType.ResponseHeader:
          //console.log('ResponseHeader' + HttpEventType.ResponseHeader);
          break;
        case HttpEventType.UploadProgress:
          this.evenTotal = response.total;
          this.progress = Math.round(response.loaded / this.evenTotal * 100);
          break;
        case HttpEventType.Response:
          this.poststatus = response.body;
          if (this.poststatus.status == 200) {
            this.poststatus_mss = this.poststatus.message;
            this.getUsers();
            //this.api_postForm.reset();
          } else {
            this.poststatus_mss = this.poststatus.message;
          }
          this.emptyallsms();
      }
    });
  }
  deleterow(id: number) {
    if (confirm("Aru you sure..??")) {
      this.APIservice.deleteUsers(id).subscribe((response) => {
        this.deletestatus = response;
        this.deletestatus_mss = this.deletestatus.message;
        this.getUsers();
        this.emptyallsms();
      });
    } else {
      return;
    }
  }
 
  display: boolean = false;
  editname: any = '';
  editemail: any = '';
  editpassword: any = '';
  user_id: any = '';
  editstatus: any = '';
  showrow(id: number) {
    this.APIservice.viewEditUsers(id).subscribe((response) => {
      this.editstatus = response;
      if (this.editstatus.status == 200) {
        this.editname = this.editstatus.Edata.name;
        this.editemail = this.editstatus.Edata.email;
        this.editpassword = this.editstatus.Edata.password;
        this.user_id = this.editstatus.Edata.id;
        this.updateForm = new FormGroup({
          new_name: new FormControl(this.editstatus.Edata.name, [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
          new_email: new FormControl(this.editstatus.Edata.email, [Validators.required, Validators.email]),
          user_id: new FormControl(this.editstatus.Edata.id, [Validators.required]),
          new_password: new FormControl(this.editstatus.Edata.password, [Validators.required, Validators.minLength(5), Validators.maxLength(10)])
        })
        this.display = true;
      } else {
        this.deletestatus_mss = this.editstatus.message;
        this.display = false;
      }
      this.emptyallsms();
    });
  }
  updateForm = new FormGroup({
    new_name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
    new_email: new FormControl('', [Validators.required, Validators.email]),
    user_id: new FormControl('', [Validators.required]),
    new_password: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)])
  })
  get new_name() {
    return this.updateForm.get('new_name');
  }
  get userid() {
    return this.updateForm.get('user_id');
  }
  get new_email() {
    return this.updateForm.get('new_email');
  }
  get new_password() {
    return this.updateForm.get('new_password');
  }
  updatestatus: any;
  updateUser() {
    this.APIservice.UpdateUsers(this.updateForm.value).subscribe((response) => {
      this.updatestatus = response;
      if (this.updatestatus.status == 200) {
        this.deletestatus_mss = this.updatestatus.message;
        this.display = false;
        this.getUsers();
        this.emptyallsms();
      } else {
        this.deletestatus_mss = this.updatestatus.message;
        this.emptyallsms();
      }
    });
  }
  emptyallsms() {
    setTimeout(() => {
      this.poststatus_mss = "";
      this.deletestatus_mss = "";
      this.api_fatch_sms = '';
      this.progress = 0;
    }, 3000);
  }


  testInterface() {
    const data: dataType = {
      name: 'Bidyut',
      id: 100,
      indian: true,
      address: '67 odisha'
    }
    return data;
  }

}
