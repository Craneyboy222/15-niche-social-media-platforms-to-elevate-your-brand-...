// Utility functions for UI components
export function formatDate(date: Date): string {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

export function truncateText(text: string, length: number): string {
  return text.length > length ? text.substring(0, length - 3) + '...' : text;
}