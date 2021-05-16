import { Injectable } from '@angular/core';
import { Curriculum } from './curriculum';
import { CurriculumDurationType } from './curriculum-duration-type';
import { Institute } from '@angular-monorepo-demo-university/shared/model';

@Injectable({ providedIn: 'root' })
export class CurriculumService {
  getCurriculums(): Curriculum[] {
    return [
      {
        id: 0,
        name: 'Sisehaigused',
        institute: Institute.medicine,
        duration: 5,
        durationType: CurriculumDurationType.year
      },
      {
        id: 1,
        name: 'Filosoofia',
        institute: Institute.philosophy,
        duration: 1,
        durationType: CurriculumDurationType.semester
      }
    ];
  }
}