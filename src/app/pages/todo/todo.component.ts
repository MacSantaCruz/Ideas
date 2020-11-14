import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/todo.model'
 
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:Todo[] = [{title:"Python",info:"Basics",link:''}];

  constructor() { }

  ngOnInit(): void {
  }

}
