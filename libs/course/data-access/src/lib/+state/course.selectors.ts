import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  COURSE_FEATURE_KEY,
  State,
  CoursePartialState,
  courseAdapter,
} from './course.reducer';

// Lookup the 'Course' feature state managed by NgRx
export const getCourseState = createFeatureSelector<CoursePartialState, State>(
  COURSE_FEATURE_KEY
);

const { selectAll, selectEntities } = courseAdapter.getSelectors();

export const getCourseLoaded = createSelector(
  getCourseState,
  (state: State) => state.loaded
);

export const getCourseError = createSelector(
  getCourseState,
  (state: State) => state.error
);

export const getAllCourse = createSelector(getCourseState, (state: State) =>
  selectAll(state)
);

export const getCourseEntities = createSelector(
  getCourseState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getCourseState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getCourseEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
