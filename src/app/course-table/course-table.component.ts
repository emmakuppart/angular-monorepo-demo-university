import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';

@Component({
  selector: 'demo-course-table',
  templateUrl: './course-table.component.html',
  styleUrls: ['./course-table.component.css']
})
export class CourseTableComponent implements OnInit {
  readonly columns = ['id', 'name', 'professor', 'institute', ''];

  courses = this.service.getCourses();

  constructor(private service: CourseService) {}

  ngOnInit(): void {}

  register(row: Course): void {
    this.courses = this.service.register(row.id);
  }
}
