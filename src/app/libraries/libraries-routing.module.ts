import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadComponent } from './load/load.component';
import { MainComponent } from './main/main.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [

  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'load', component: LoadComponent },
      { path: 'search', component: SearchComponent },
      { path: '**', redirectTo: 'load' },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrariesRoutingModule { }
