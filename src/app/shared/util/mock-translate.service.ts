import { EventEmitter, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class MockTranslateService {
  currentLang = 'et';

  get<T>(key: T): Observable<T> {
    return of(key);
  }

  instant(key: string | string[], interpolateParams?: object): string | any {
  }

  setDefaultLang(lang: string): void {

  }

  use(lang: string): void {

  }
}
