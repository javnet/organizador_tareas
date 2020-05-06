import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FiltersRoutingModule } from './filters-routing.module';
import { FiltersComponent } from './components/filters/filters.component';
import { AddFiltersComponent } from './components/add-filters/add-filters.component';
import { DeleteFiltersComponent } from './components/delete-filters/delete-filters.component';


@NgModule({
  declarations: [FiltersComponent, AddFiltersComponent, DeleteFiltersComponent],
  imports: [
    CommonModule,
    FiltersRoutingModule
  ]
})
export class FiltersModule { }
