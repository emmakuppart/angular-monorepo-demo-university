import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';

import * as CourseFeature from './course.reducer';
import * as CourseActions from './course.actions';

@Injectable()
export class CourseEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.init),
      fetch({
        run: (action) => {
          // Your custom service 'load' logic goes here. For now just return a success action...
          return CourseActions.loadCourseSuccess({ course: [] });
        },

        onError: (action, error) => {
          console.error('Error', error);
          return CourseActions.loadCourseFailure({ error });
        },
      })
    )
  );

  constructor(private actions$: Actions) {}
}
