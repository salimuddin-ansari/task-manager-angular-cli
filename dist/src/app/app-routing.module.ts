import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ProjectComponent } from './features/project/project.component';
import { TaskComponent } from './features/task/task.component';

const routes: Routes = [
   { path: 'dashboard', component: DashboardComponent },
  { path: 'projects', component: ProjectComponent },
  { path: 'tasks', component: TaskComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
