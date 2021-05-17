import { NgModule } from '@angular/core';
import { CurriculumTableComponent } from './curriculum-table.component';
import { CurriculumService } from './curriculum.service';
import { SharedModule } from '../shared/shared.module';
import { CurriculumTableRoutingModule } from './curriculum-table-routing.module';

@NgModule({
  imports: [SharedModule, CurriculumTableRoutingModule],
  declarations: [CurriculumTableComponent],
  exports: [CurriculumTableComponent],
  providers: [CurriculumService]
})
export class CurriculumTableModule {}