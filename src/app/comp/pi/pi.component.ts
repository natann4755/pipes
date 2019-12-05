import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-pi',
  templateUrl: './pi.component.html',
  styleUrls: ['./pi.component.css']
})
export class PiComponent implements OnInit {


p1= new FormControl('')
date =new Date()
p3= new FormControl('')
p4= new FormControl('')
p5= new FormControl('')
p6= new FormControl('')
p7= new FormControl('')
p8= new FormControl('')
p9= new FormControl('')
p10= new FormControl('')


p9arr:string[]=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p"]
numarr:number[]=[2,5,6,8,31,4,56,8,9,5,4,3,65,7]
 
  constructor() { 
    
  }

  ngOnInit() {
  }

}
