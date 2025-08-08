/* Analytics utilities */

export function logEvent(eventName: string, eventParams: Record<string, any>): void {
  console.log(`Event logged: ${eventName}`, eventParams);
  // Integrate with analytics service like Google Analytics, Mixpanel, etc.
}

export function trackPageView(url: string): void {
  console.log(`Page view tracked: ${url}`);
  // Integrate with analytics service
}