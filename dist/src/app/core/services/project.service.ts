import { Injectable } from '@angular/core';
import { Project } from 'src/app/shared/models/project.model';
import { Task } from 'src/app/shared/models/task.model';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
   private projects: Project[] = [];

  getAll(): Project[] {
    return this.projects;
  }

  add(project: Project): void {
    this.projects.push(project);
  }

  remove(index: number): void {
    this.projects.splice(index, 1);
  }
}
