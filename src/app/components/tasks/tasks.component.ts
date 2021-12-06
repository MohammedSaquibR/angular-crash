import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks : Task[] = [];

  constructor(private taskservice : TaskService) { }

  ngOnInit(): void {
    this.taskservice.getTask().subscribe((tasks) => (this.tasks=tasks));
  }

  Ondelete(task:any){
    this.taskservice.deleteTask(task).subscribe(()=> this.tasks=this.tasks.filter((t) => t.id !== task.id));
  }

  OnToggle(task:any){
    task.reminder = !task.reminder;
    this.taskservice.updateTask(task).subscribe();
  }

}
