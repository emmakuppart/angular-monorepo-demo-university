import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  { path: 'courses',
    loadChildren: () =>
      import('libs/course/feature-course/src/lib/course-feature-course.module')
        .then((m) => m.CourseFeatureCourseModule) },
  { path: 'curriculums',
    loadChildren: () =>
      import('libs/curriculum/feature-curriculum-list/src/lib/curriculum-feature-curriculum-list.module')
        .then((m) => m.CurriculumFeatureCurriculumListModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
