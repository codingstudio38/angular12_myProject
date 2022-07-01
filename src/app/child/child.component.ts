import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input() perentdata = 0;
  @Input() perentdata2 = 0; 
  @Output() updatecDataEvent = new EventEmitter<string>();

  constructor() { }
  ngOnInit(): void {
  }
 
}
