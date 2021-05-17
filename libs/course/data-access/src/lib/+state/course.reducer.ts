import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as CourseActions from './course.actions';
import { CourseEntity } from './course.models';

export const COURSE_FEATURE_KEY = 'course';

export interface State extends EntityState<CourseEntity> {
  selectedId?: string | number; // which Course record has been selected
  loaded: boolean; // has the Course list been loaded
  error?: string | null; // last known error (if any)
}

export interface CoursePartialState {
  readonly [COURSE_FEATURE_KEY]: State;
}

export const courseAdapter: EntityAdapter<CourseEntity> = createEntityAdapter<CourseEntity>();

export const initialState: State = courseAdapter.getInitialState({
  // set initial required properties
  loaded: false,
});

const courseReducer = createReducer(
  initialState,
  on(CourseActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(CourseActions.loadCourseSuccess, (state, { course }) =>
    courseAdapter.setAll(course, { ...state, loaded: true })
  ),
  on(CourseActions.loadCourseFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function reducer(state: State | undefined, action: Action) {
  return courseReducer(state, action);
}
