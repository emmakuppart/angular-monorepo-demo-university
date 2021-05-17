import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { readFirst } from '@nrwl/angular/testing';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';

import { NxModule } from '@nrwl/angular';

import { CourseEntity } from './course.models';
import { CourseEffects } from './course.effects';
import { CourseFacade } from './course.facade';

import * as CourseSelectors from './course.selectors';
import * as CourseActions from './course.actions';
import {
  COURSE_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './course.reducer';

interface TestSchema {
  course: State;
}

describe('CourseFacade', () => {
  let facade: CourseFacade;
  let store: Store<TestSchema>;
  const createCourseEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as CourseEntity);

  beforeEach(() => {});

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(COURSE_FEATURE_KEY, reducer),
          EffectsModule.forFeature([CourseEffects]),
        ],
        providers: [CourseFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(CourseFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async (done) => {
      try {
        let list = await readFirst(facade.allCourse$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        facade.init();

        list = await readFirst(facade.allCourse$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });

    /**
     * Use `loadCourseSuccess` to manually update list
     */
    it('allCourse$ should return the loaded list; and loaded flag == true', async (done) => {
      try {
        let list = await readFirst(facade.allCourse$);
        let isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(0);
        expect(isLoaded).toBe(false);

        store.dispatch(
          CourseActions.loadCourseSuccess({
            course: [createCourseEntity('AAA'), createCourseEntity('BBB')],
          })
        );

        list = await readFirst(facade.allCourse$);
        isLoaded = await readFirst(facade.loaded$);

        expect(list.length).toBe(2);
        expect(isLoaded).toBe(true);

        done();
      } catch (err) {
        done.fail(err);
      }
    });
  });
});
