import type { SortDirectionEnum } from '../constants';

export interface PaginationOptions<T = any> {
  page?: number;
  limit?: number;
  sortBy?: string[];
  sortDirection?: SortDirectionEnum[];
  filters?: T;
}

export interface PaginatedResult<T, D = any> {
  items: T[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
    additionalData?: D;
  };
}

import type { DEFAULT_FILTERS_KEYS } from '../constants';

export interface QueryParamMapping
  extends Partial<Record<keyof typeof DEFAULT_FILTERS_KEYS, string>> {}
