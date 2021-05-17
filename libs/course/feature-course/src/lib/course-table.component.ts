import { Component, OnInit } from '@angular/core';
import { Course } from '../../../data-access/src/lib/course';
import { CourseFacade } from '@angular-monorepo-demo-university/course/data-access';

@Component({
  selector: 'demo-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {
  readonly columns = ['id', 'name', 'professor', 'institute', ''];

  courses = this.facade.init();

  constructor(private facade: CourseFacade) {}

  ngOnInit(): void {}

  register(row: Course): void {
    this.courses = this.facade.register(row.id);
  }
}
