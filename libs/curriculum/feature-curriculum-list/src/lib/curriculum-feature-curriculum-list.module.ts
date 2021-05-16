import { NgModule } from '@angular/core';
import { SharedUiModule } from '@angular-monorepo-demo-university/shared/ui';
import { CurriculumTableComponent } from './curriculum-table.component';
import { SharedUtilModule } from '@angular-monorepo-demo-university/shared/util';
import { CurriculumFeatureCurriculumRoutingModule } from './curriculum-feature-curriculum-routing.module';

@NgModule({
  imports: [SharedUiModule, SharedUtilModule, CurriculumFeatureCurriculumRoutingModule],
  declarations: [CurriculumTableComponent],
  exports: [CurriculumTableComponent]
})
export class CurriculumFeatureCurriculumListModule {}
