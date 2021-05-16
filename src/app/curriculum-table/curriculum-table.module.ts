import { NgModule } from '@angular/core';
import { CurriculumTableComponent } from './curriculum-table.component';
import { CurriculumService } from './curriculum.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [CurriculumTableComponent],
  exports: [CurriculumTableComponent],
  providers: [CurriculumService]
})
export class CurriculumTableModule {}