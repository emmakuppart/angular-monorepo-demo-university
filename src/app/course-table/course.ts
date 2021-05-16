import { Institute } from '../shared/model/institute';

export interface Course {
  id: number;
  name: string;
  institute: Institute;
  professor: string;
  registered: boolean;
}