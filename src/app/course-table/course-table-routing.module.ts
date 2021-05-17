import { NgModule } from '@angular/core';
import { CourseTableComponent } from './course-table.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CourseTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CourseTableRoutingModule {}
