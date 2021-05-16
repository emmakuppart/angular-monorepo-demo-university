import { Institute } from '../shared/model/institute';
import { CurriculumDurationType } from './curriculum-duration-type';

export interface Curriculum {
  id: number;
  name: string;
  duration: number;
  durationType: CurriculumDurationType;
  institute: Institute;
}