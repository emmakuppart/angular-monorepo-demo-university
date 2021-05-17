import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { CourseEffects } from './course.effects';
import * as CourseActions from './course.actions';

describe('CourseEffects', () => {
  let actions: Observable<any>;
  let effects: CourseEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        CourseEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(CourseEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: CourseActions.init() });

      const expected = hot('-a-|', {
        a: CourseActions.loadCourseSuccess({ course: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
