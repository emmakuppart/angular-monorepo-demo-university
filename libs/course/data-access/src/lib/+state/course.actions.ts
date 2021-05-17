import { createAction, props } from '@ngrx/store';
import { CourseEntity } from './course.models';

export const init = createAction('[Course Page] Init');

export const loadCourseSuccess = createAction(
  '[Course/API] Load Course Success',
  props<{ course: CourseEntity[] }>()
);

export const loadCourseFailure = createAction(
  '[Course/API] Load Course Failure',
  props<{ error: any }>()
);
