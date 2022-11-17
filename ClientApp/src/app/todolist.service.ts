import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Inject, Injectable, ErrorHandler } from '@angular/core';
import { Observable, throwError  } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { TodoItem } from './todo';
import { TItemDTO } from './todoDTO';

@Injectable({
  providedIn: 'root'
})
export class TodolistService  {
  baseUrl:string;
  constructor(private http:HttpClient, @Inject("BASE_URL") private url:string) { 
    this.baseUrl = url;
  }

  GetToDos():Observable<TodoItem[]>{
    return this.http.get<TodoItem[]>(this.baseUrl+"api/todo");
  }

  MakeToDo(desc:string):void{
    let obviously:boolean = false;
    let postDesc:string = "";
    let toPost:TItemDTO = {description:desc, isCompleted:obviously};
    this.http.post<TItemDTO>(this.baseUrl+"api/todo", toPost).subscribe(data => {
      postDesc = data.description;
    });
    console.log(desc+" after submit")
  }
}
