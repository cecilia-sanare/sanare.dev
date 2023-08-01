export function groupBy<T extends object, K extends keyof T>(items: T[], key: K) {
  return items.reduce((output, item) => {
    const value: T[K] = item[key];

    output[value] = output[value] || [];
    output[value].push(item);

    return output;
  }, {} as Record<T[K], T[]>);
}
