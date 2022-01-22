import { Component, OnInit, DoCheck } from '@angular/core';
import { TaskList } from '../../model/task-list';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public taskList: Array<TaskList> = JSON.parse(localStorage.getItem("list") || "[]")

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
    localStorage.setItem("list", JSON.stringify(this.taskList))
  }

  public addNewItemTaskList(item:string) {
    this.taskList.push({task: item, checked: false})
  }

  public deleteItemTakList(event: number) {    
    this.taskList.splice(event, 1)
  }

  public deleteAllItens() {
    const confirm = window.confirm("Do you want delete all your taks?")
    if (!confirm) return
    this.taskList = []
  }

  public validationInput(event:any, index:number) {
    if(!event.length) {
      const confirm = window.confirm("The task is empty! Do you want to delete it?")

      if(confirm) {
        this.deleteItemTakList(index)
      }
    }
  }

}