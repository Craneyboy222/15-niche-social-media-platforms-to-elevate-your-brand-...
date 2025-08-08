/* Object utilities */

export function deepClone<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

export function isEmptyObject(obj: object): boolean {
  return Object.keys(obj).length === 0;
}

export function mergeObjects<T, U>(target: T, source: U): T & U {
  return { ...target, ...source };
}