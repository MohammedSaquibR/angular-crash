import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task : any;
  @Output() deleteTask = new EventEmitter();
  @Output() toggleTask = new EventEmitter();
  faTimes = faTimes;
  constructor() { }

  ngOnInit(): void {
  }
  OnDel(task:any){
    this.deleteTask.emit(task);
  }

  OnToggle(task:any){
    this.toggleTask.emit(task);
  }

}
