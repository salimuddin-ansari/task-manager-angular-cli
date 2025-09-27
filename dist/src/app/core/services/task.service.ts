import { Injectable } from '@angular/core';
import { Task } from '../../shared/models/task.model';



@Injectable({
  providedIn: 'root'
})
export class TaskService {
   private tasks: Task[] = [];

  getAll(): Task[] {
    return this.tasks;
  }

  add(task: Task): void {
    this.tasks.push(task);
  }

  updateStatus(index: number, status: Task['status']): void {
    this.tasks[index].status = status;
  }

  remove(index: number): void {
    this.tasks.splice(index, 1);
  }
}
