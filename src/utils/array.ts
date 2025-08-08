export const removeDuplicates = (array: any[]) => {
  return [...new Set(array)];
};

export const findMax = (array: number[]) => {
  return Math.max(...array);
};

export const findMin = (array: number[]) => {
  return Math.min(...array);
};

export const chunkArray = (array: any[], size: number) => {
  const chunked = [];
  for (let i = 0; i < array.length; i += size) {
    chunked.push(array.slice(i, i + size));
  }
  return chunked;
};

console.log('Array utilities initialized.');