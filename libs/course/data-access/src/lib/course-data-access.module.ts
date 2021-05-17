import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromCourse from './+state/course.reducer';
import { CourseEffects } from './+state/course.effects';
import { CourseFacade } from './+state/course.facade';

@NgModule({
  imports: [
    StoreModule.forFeature(fromCourse.COURSE_FEATURE_KEY, fromCourse.reducer),
    EffectsModule.forFeature([CourseEffects])
  ],
  providers: [CourseFacade],
})
export class CourseDataAccessModule {}
