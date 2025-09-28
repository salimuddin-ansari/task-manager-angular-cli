import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project.service';
import { Project } from 'src/app/shared/models/project.model';
import { Task } from 'src/app/shared/models/task.model';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  projects: Project[] = [];
  newProject: { name: string; description?: string } = { name: '', description: '' };
  constructor(private projectService: ProjectService) {}
  ngOnInit(): void {
    this.projects = this.projectService.getAll();
  }
  addProject(): void {
  if (this.newProject.name && this.newProject.name.trim() !== '') {
    const project: Project = {
      id: Date.now(), 
      name: this.newProject.name.trim(),
      description: this.newProject.description?.trim() || '',
      tasks: [] 
    };
    this.projectService.add(project);
    this.newProject = { name: '', description: '' };
  }
}
  deleteProject(index: number): void {
    this.projectService.remove(index);
  }
}
