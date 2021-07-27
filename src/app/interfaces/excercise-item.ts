import { SafeResourceUrl } from '@angular/platform-browser';

export interface ExcerciseItem
{
  id: string;
  day?: string;
  name: string;
  bodyPart: string;
  sets: number;
  reps: number;
  weight: number;
  img: any;
  desc?: any;
  unit?: string;
}
