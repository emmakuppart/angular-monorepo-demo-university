import { Injectable } from '@angular/core';

import { select, Store, Action } from '@ngrx/store';

import * as CourseActions from './course.actions';
import * as CourseFeature from './course.reducer';
import * as CourseSelectors from './course.selectors';
import { CourseService } from '../course.service';

@Injectable()
export class CourseFacade {
  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(CourseSelectors.getCourseLoaded));
  allCourse$ = this.store.pipe(select(CourseSelectors.getAllCourse));
  selectedCourse$ = this.store.pipe(select(CourseSelectors.getSelected));

  constructor(private store: Store, private service: CourseService) {}

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    return this.service.getCourses();
  }

  register(courseId: number) {
    return this.service.register(courseId);
  }
}
