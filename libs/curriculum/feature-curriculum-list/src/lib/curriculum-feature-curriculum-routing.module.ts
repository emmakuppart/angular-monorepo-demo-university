import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CurriculumTableComponent } from './curriculum-table.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: CurriculumTableComponent
    }
  ])],
  exports: [RouterModule]
})
export class CurriculumFeatureCurriculumRoutingModule {}
