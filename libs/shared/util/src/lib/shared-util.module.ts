import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstitutePipe } from './institute.pipe';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, TranslateModule],
  declarations: [InstitutePipe],
  exports: [InstitutePipe, CommonModule, TranslateModule],
  providers: [InstitutePipe]
})
export class SharedUtilModule {}
