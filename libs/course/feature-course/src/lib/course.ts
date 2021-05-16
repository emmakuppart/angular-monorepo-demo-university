import { Institute } from '@angular-monorepo-demo-university/shared/model';

export interface Course {
  id: number;
  name: string;
  institute: Institute;
  professor: string;
  registered: boolean;
}