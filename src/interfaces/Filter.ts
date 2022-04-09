import { Type } from './Type';

export interface Filter {
  searchQuery: string | null;
  type: Type;
}
