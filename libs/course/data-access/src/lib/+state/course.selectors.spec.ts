import { CourseEntity } from './course.models';
import { State, courseAdapter, initialState } from './course.reducer';
import * as CourseSelectors from './course.selectors';

describe('Course Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCourseId = (it) => it['id'];
  const createCourseEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CourseEntity);

  let state;

  beforeEach(() => {
    state = {
      course: courseAdapter.setAll(
        [
          createCourseEntity('PRODUCT-AAA'),
          createCourseEntity('PRODUCT-BBB'),
          createCourseEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Course Selectors', () => {
    it('getAllCourse() should return the list of Course', () => {
      const results = CourseSelectors.getAllCourse(state);
      const selId = getCourseId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = CourseSelectors.getSelected(state);
      const selId = getCourseId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getCourseLoaded() should return the current 'loaded' status", () => {
      const result = CourseSelectors.getCourseLoaded(state);

      expect(result).toBe(true);
    });

    it("getCourseError() should return the current 'error' state", () => {
      const result = CourseSelectors.getCourseError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
