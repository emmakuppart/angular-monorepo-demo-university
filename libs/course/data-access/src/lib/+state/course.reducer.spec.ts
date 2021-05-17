import { CourseEntity } from './course.models';
import * as CourseActions from './course.actions';
import { State, initialState, reducer } from './course.reducer';

describe('Course Reducer', () => {
  const createCourseEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CourseEntity);

  beforeEach(() => {});

  describe('valid Course actions', () => {
    it('loadCourseSuccess should return set the list of known Course', () => {
      const course = [
        createCourseEntity('PRODUCT-AAA'),
        createCourseEntity('PRODUCT-zzz'),
      ];
      const action = CourseActions.loadCourseSuccess({ course });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
