import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseTableComponent } from './course-table/course-table.component';
import { CurriculumTableComponent } from './curriculum-table/curriculum-table.component';

const routes: Routes = [
  { path: 'courses', component: CourseTableComponent },
  { path: 'curriculums', component: CurriculumTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
