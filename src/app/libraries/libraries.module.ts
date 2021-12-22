import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrariesRoutingModule } from './libraries-routing.module';
import { LoadComponent } from './load/load.component';
import { SearchComponent } from './search/search.component';
import { MainComponent } from './main/main.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoadComponent,
    SearchComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    LibrariesRoutingModule,
    ReactiveFormsModule
  ]
})
export class LibrariesModule { }
