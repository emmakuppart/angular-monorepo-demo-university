import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate'
})
export class MockTranslatePipe implements PipeTransform {
  name = 'translate';

  transform(query: string, ...args: any[]): any {
    return query;
  }
}
