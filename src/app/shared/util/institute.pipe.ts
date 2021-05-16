import { Pipe, PipeTransform } from '@angular/core';
import { Institute } from '../model/institute';
import { TranslateService } from '@ngx-translate/core';

@Pipe({
  name: 'institute'
})
export class InstitutePipe implements PipeTransform {

  constructor(private translateService: TranslateService) {}

  transform(value: Institute): string {
    return this.translateService.instant('institute.' + value);
  }
}