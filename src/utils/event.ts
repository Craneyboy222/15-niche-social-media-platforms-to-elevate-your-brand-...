// Utility functions for event handling
export function debounce(func: Function, wait: number): Function {
  let timeout: NodeJS.Timeout;
  return function (...args: any[]) {
    const later = () => {
      timeout = null;
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function throttle(func: Function, limit: number): Function {
  let inThrottle: boolean;
  return function (...args: any[]) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}