export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const toCamelCase = (string: string) => {
  return string.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', '')
      .replace('_', '');
  });
};

export const truncateString = (string: string, length: number) => {
  if (string.length <= length) return string;
  return string.slice(0, length) + '...';
};

console.log('String utilities initialized.');