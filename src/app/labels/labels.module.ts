import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LabelsRoutingModule } from './labels-routing.module';
import { DeleteLabelsComponent } from './components/delete-labels/delete-labels.component';
import { AddLabelsComponent } from './components/add-labels/add-labels.component';
import { LabelsComponent } from './components/labels/labels.component';


@NgModule({
  declarations: [DeleteLabelsComponent, AddLabelsComponent, LabelsComponent],
  imports: [
    CommonModule,
    LabelsRoutingModule
  ]
})
export class LabelsModule { }
