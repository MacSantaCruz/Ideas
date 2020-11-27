import { Component, OnInit } from '@angular/core';
import {Todo} from '../../models/todo.model'
import { TodoService } from 'src/app/services/todo.service';
 
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos:Todo[] = [
    {title:"Python",info:"Basics",link:'',      properties:["name"],}, 
    {title:"Analytics",info:"Some Info",link:'',      properties:["name"],},
    {title:"Third Placeholder",info:"Some more Info",link:'',      properties:["name"],}
  ];
  
  pythonOutput: string = '';

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getPythonScript().subscribe(res => {
      let todo = new Todo();
      todo.title = "Python Script";
      todo.info = res['message'];
      todo.link = '';
      this.todos.push(todo);
    });
  }

}
