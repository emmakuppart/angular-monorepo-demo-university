import { NgModule } from '@angular/core';
import { CourseTableComponent } from './course-table.component';
import { SharedUiModule } from '@angular-monorepo-demo-university/shared/ui';
import { RegisterButtonComponent } from './register-button/register-button.component';
import { SharedUtilModule } from '@angular-monorepo-demo-university/shared/util';
import { CourseFeatureCourseRoutingModule } from './course-feature-course-routing.module';

@NgModule({
  imports: [SharedUiModule, SharedUtilModule, CourseFeatureCourseRoutingModule],
  declarations: [CourseTableComponent, RegisterButtonComponent],
  exports: [CourseTableComponent]
})
export class CourseFeatureCourseModule {}
