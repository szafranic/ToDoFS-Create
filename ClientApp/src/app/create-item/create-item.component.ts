import { Component, OnInit } from '@angular/core';
import { TodolistService } from '../todolist.service';
import { TodoItem } from '../todo';
@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {
  descT:string = "";
  constructor(private todoDB: TodolistService) { }

  MakeToDo(desc:string){
    console.log(desc);
    this.todoDB.MakeToDo(desc);
  }
  ngOnInit(): void {
  }

}
