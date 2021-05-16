import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CourseTableComponent } from './course-table.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: CourseTableComponent
    }
  ])],
  exports: [RouterModule]
})
export class CourseFeatureCourseRoutingModule {}
