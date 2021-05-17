import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'courses',
    loadChildren: () => import('src/app/course-table/course-table.module').then((m) => m.CourseTableModule)
  },
  {
    path: 'curriculums',
    loadChildren: () => import('src/app/curriculum-table/curriculum-table.module').then((m) => m.CurriculumTableModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
