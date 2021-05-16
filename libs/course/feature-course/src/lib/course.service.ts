import { Injectable } from '@angular/core';
import { Course } from './course';
import { Institute } from '@angular-monorepo-demo-university/shared/model';

@Injectable({ providedIn: 'root' })
export class CourseService {
  private courses = [
    {
      id: 0,
      name: 'Anatoomia',
      institute: Institute.medicine,
      professor: 'Kati',
      registered: false

    },
    {
      id: 1,
      name: 'Elektriahelad',
      institute: Institute.physics,
      professor: 'Kalev',
      registered: false
    }
  ];

  getCourses(): Course[] {
    return this.courses;
  }

  register(courseId: number): Course[] {
    this.courses = this.courses.map(course => {
      if (course.id !== courseId) {
        return course;
      }
      return {
        ...course,
        registered: true
      };
    });
    return this.courses;
  }
}