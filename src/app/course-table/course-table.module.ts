import { NgModule } from '@angular/core';
import { CourseTableComponent } from './course-table.component';
import { RegisterButtonComponent } from './register-button/register-button.component';
import { CourseService } from './course.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [CourseTableComponent, RegisterButtonComponent],
  exports: [CourseTableComponent],
  providers: [CourseService]
})
export class CourseTableModule {}
