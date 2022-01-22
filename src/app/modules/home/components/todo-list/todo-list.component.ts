import { Component, OnInit } from '@angular/core';
import { TaskList } from '../../model/task-list';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public taskList: Array<TaskList> = [
    {task: 'Go to grocery', checked: false}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  public deleteItemTakList(event: number) {    
    this.taskList.splice(event, 1)
  }

  public deleteAllItens() {
    const confirm = window.confirm("Do you want delete all your taks?")
    if (!confirm) return
    this.taskList = []
  }

}