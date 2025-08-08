import { useEffect, useState } from 'react';

interface IntersectionObserverArgs {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
}

export function useIntersectionObserver(
  elementRef: React.RefObject<Element>,
  { root = null, rootMargin = '0px', threshold = 0 }: IntersectionObserverArgs
) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIntersecting(entry.isIntersecting),
      { root, rootMargin, threshold }
    );

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, root, rootMargin, threshold]);

  return isIntersecting;
}