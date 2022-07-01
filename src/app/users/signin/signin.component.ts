import { Component, OnInit } from '@angular/core';
import { dataType } from '../../services/interfacepage';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
