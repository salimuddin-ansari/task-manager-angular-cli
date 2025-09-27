import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project.service';
import { Project } from 'src/app/shared/models/project.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 projects: Project[] = [];
  newProject: Partial<Project> = { name: '', description: '', tasks: [] };

  constructor(private projectService: ProjectService) {
    this.projects = this.projectService.getAll();
  }
  ngOnInit(): void {
  }
  getTaskSummary(project: Project) {
    const summary = { notStarted: 0, inProgress: 0, completed: 0 };
    project.tasks.forEach(task => {
      const key = task.status.replace(' ', '').toLowerCase() as keyof typeof summary;
      if (summary[key] !== undefined) {
        summary[key]++;
      }
    });
    return summary;
  }
}
