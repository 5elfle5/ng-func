export interface TableColumn {
  name: string;
  displayName: string;
}

export type ComparerFn = (both: BothFn) => (x: any, y: any) => number;
export type BothFn = (x: any, y: any) => boolean;
export type SortFn = (columnName: string, isAscDirection: boolean) => (x, y) => number;