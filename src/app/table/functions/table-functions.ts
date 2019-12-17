import { BothFn, ComparerFn } from "../models/table-models";

export const bothString = (x, y) => {
  return typeof x === 'string' && typeof y === 'string';
}
export const getAscComparer = (bothString: BothFn) => (x, y) => {
  return bothString(x, y) ? x.localeCompare(y): (x > y ? 1 : -1);
}
export const getDescComparer = (bothString: BothFn) => (x, y) => {
  return bothString(x, y) ? y.localeCompare(x): (x < y ? 1 : -1);
}
export const getSortFn =
  (getAscComparer: ComparerFn, getDescComparer: ComparerFn, bothString: BothFn) =>
  (columnName: string, isAscDirection: boolean) =>
  (x, y) => {
    const ascComparer = getAscComparer(bothString);
    const descComparer = getDescComparer(bothString);
    return isAscDirection
        ? ascComparer(x[columnName], y[columnName])
        : descComparer(x[columnName], y[columnName]);
}
