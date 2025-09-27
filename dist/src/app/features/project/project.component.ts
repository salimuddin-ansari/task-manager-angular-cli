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

  // keep this minimal, don’t force tasks here
  newProject: { name: string; description?: string } = { name: '', description: '' };

  constructor(private projectService: ProjectService) {}

  ngOnInit(): void {
    this.projects = this.projectService.getAll();
  }

  addProject(): void {
  if (this.newProject.name && this.newProject.name.trim() !== '') {
    const project: Project = {
      id: Date.now(), // or use a counter
      name: this.newProject.name.trim(),
      description: this.newProject.description?.trim() || '',
      tasks: [] // always start empty
    };

    this.projectService.add(project);

    // reset form
    this.newProject = { name: '', description: '' };
  }
}


  deleteProject(index: number): void {
    this.projectService.remove(index);
  }

  getTaskSummary(project: Project) {
    const summary = { notStarted: 0, inProgress: 0, completed: 0 };

    project.tasks.forEach((task: Task) => {
      switch (task.status) {
        case 'Not Started':
          summary.notStarted++;
          break;
        case 'In Progress':
          summary.inProgress++;
          break;
        case 'Completed':
          summary.completed++;
          break;
      }
    });

    return summary;
  }
}
