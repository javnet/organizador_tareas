import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';
import { DeleteTasksComponent } from './components/delete-tasks/delete-tasks.component';


@NgModule({
  declarations: [TasksComponent, AddTasksComponent, DeleteTasksComponent],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
