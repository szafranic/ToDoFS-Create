import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../todo';
import { TodolistService } from '../todolist.service';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {
  todos: TodoItem[] = [];
  constructor(private todoDB: TodolistService) { 
    todoDB.GetToDos().subscribe((results:TodoItem[])=> {
      this.todos = results;
    });
    console.log(this.todos[1])
    console.log(this.todos[2])
  }

  ngOnInit(): void {
  }

}
