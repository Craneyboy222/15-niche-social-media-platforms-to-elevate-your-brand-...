export const convertCurrency = async (amount: number, fromCurrency: string, toCurrency: string) => {
  // This is a placeholder for actual currency conversion logic.
  // In a real-world scenario, you'd call an API like exchangeratesapi.io or similar.
  return amount; // Dummy conversion rate
};

export const formatCurrency = (amount: number, currency = 'USD') => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
};

console.log('Currency utilities initialized.');