import { CurriculumDurationType } from './curriculum-duration-type';
import { Institute } from '@angular-monorepo-demo-university/shared/model';

export interface Curriculum {
  id: number;
  name: string;
  duration: number;
  durationType: CurriculumDurationType;
  institute: Institute;
}