import {Detailed} from './detailed';

export interface Pack {
  id: number;
  consist: string;
  detailed: Detailed[];
  mass: number;
  available: boolean;
}
