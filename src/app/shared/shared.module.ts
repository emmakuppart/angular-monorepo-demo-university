import { NgModule } from '@angular/core';
import { InstitutePipe } from './util/institute.pipe';
import { TableComponent } from './ui/table/table.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [InstitutePipe, TableComponent],
  exports: [InstitutePipe, TableComponent, CommonModule, TranslateModule],
  providers: [InstitutePipe]
})
export class SharedModule {}