/* Address utilities */

export interface Address {
  street: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

export function formatAddress(address: Address): string {
  return `${address.street}, ${address.city}, ${address.state} ${address.postalCode}, ${address.country}`;
}

export function validatePostalCode(postalCode: string, country: string): boolean {
  // Implement regex validation based on country
  // Placeholder implementation
  return /^[0-9]{5}(?:-[0-9]{4})?$/.test(postalCode);
}