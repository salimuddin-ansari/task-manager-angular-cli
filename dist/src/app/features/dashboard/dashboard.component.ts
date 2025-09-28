import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/core/services/project.service';
import { Project } from 'src/app/shared/models/project.model';
import { Task } from 'src/app/shared/models/task.model';

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
