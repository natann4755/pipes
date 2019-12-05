import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiv',
  templateUrl: './directiv.component.html',
  styleUrls: ['./directiv.component.css']
})
export class DirectivComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  a(){
    console.log('a =');
    
  }
}
