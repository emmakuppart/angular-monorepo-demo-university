import { NgModule } from '@angular/core';
import { CurriculumTableComponent } from './curriculum-table.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CurriculumTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CurriculumTableRoutingModule {}