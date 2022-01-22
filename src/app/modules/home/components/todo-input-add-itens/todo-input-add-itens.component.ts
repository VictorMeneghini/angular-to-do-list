import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  public addItemTaskList:string = ""
  @Output() public emmitItemTaskList = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

  public submitItemTaskList() {
    if (!this.addItemTaskList.trim()) return
    this.emmitItemTaskList.emit(this.addItemTaskList)
    this.addItemTaskList = ""
  }
}
