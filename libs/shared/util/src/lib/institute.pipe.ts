import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Institute } from '@angular-monorepo-demo-university/shared/model';

@Pipe({
  name: 'institute'
})
export class InstitutePipe implements PipeTransform {

  constructor(private translateService: TranslateService) {}

  transform(value: Institute): string {
    return this.translateService.instant('institute.' + value);
  }
}