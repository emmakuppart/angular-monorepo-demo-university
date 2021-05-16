import { Injectable } from '@angular/core';
import { Curriculum } from './curriculum';
import { Institute } from '../shared/model/institute';
import { CurriculumDurationType } from './curriculum-duration-type';

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