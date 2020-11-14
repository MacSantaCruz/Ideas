import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/todo.model'
 
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:Todo[] = [
    {title:"Python",info:"Basics",link:''}, 
    {title:"Analytics",info:"Some Info",link:''},
    {title:"Third Placeholder",info:"Some more Info",link:''}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
