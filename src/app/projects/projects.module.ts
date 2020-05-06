import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { DeleteProjectComponent } from './components/delete-project/delete-project.component';


@NgModule({
  declarations: [ProjectsComponent, AddProjectComponent, DeleteProjectComponent],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ]
})
export class ProjectsModule { }
