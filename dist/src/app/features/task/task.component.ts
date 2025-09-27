import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project.service';
import { TaskService } from 'src/app/core/services/task.service';
import { Task } from 'src/app/shared/models/task.model';
import { Project } from 'src/app/shared/models/project.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  tasks: Task[] = [];
  projects: Project[] = [];
  newTask: Partial<Task> = {
    title: '',
    description: '',
    dueDate: '',
    priority: 'Low',
    project: '',
    status: 'Not Started'
  };

  constructor(
    private taskService: TaskService,
    private projectService: ProjectService
  ) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getAll();
    this.projects = this.projectService.getAll();
  }

  addTask(): void {
    if (this.newTask.title && this.newTask.project) {
      const task: Task = {
        title: this.newTask.title,
        description: this.newTask.description,
        dueDate: this.newTask.dueDate,
        priority: this.newTask.priority as 'Low' | 'Medium' | 'High',
        project: this.newTask.project!,
        status: 'Not Started'
      };

      this.taskService.add(task);

      // attach to project
      const project = this.projects.find(p => p.name === task.project);
      if (project) {
        project.tasks.push(task);
      }

      this.newTask = { title: '', description: '', dueDate: '', priority: 'Low', project: '', status: 'Not Started' };
    }
  }

  deleteTask(index: number): void {
    this.taskService.remove(index);
  }

  updateStatus(task: Task, status: Task['status']): void {
    task.status = status;
  }
}
