export enum SortBy {
  ASC = 1,
  DESC = -1,
}

export function sortBy<T extends object, K extends keyof T>(items: T[], key: K, direction: SortBy = SortBy.ASC): T[] {
  return items.sort((a, b) => {
    if (a[key] > b[key]) return 1 * direction;
    if (a[key] < b[key]) return -1 * direction;

    return 0;
  });
}
