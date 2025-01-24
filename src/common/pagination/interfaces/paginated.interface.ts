export interface Paginated<T> {
  data: T[]; //this will create this data of type t means where this created any of the entities
  meta: {
    itemsPerPage: number;
    totalItems: number;
    currentPage: number;
    totalPages: number;
  };
  links: {
    first: string;
    last: string;
    next: string;
    prev: string;
  };
}
