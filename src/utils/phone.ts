/* Phone utilities */

import libphonenumber from 'google-libphonenumber';

const phoneUtil = libphonenumber.PhoneNumberUtil.getInstance();

export function formatPhoneNumber(phoneNumber: string, region: string): string {
  const number = phoneUtil.parseAndKeepRawInput(phoneNumber, region);
  return phoneUtil.format(number, libphonenumber.PhoneNumberFormat.INTERNATIONAL);
}

export function isValidPhoneNumber(phoneNumber: string, region: string): boolean {
  try {
    const number = phoneUtil.parse(phoneNumber, region);
    return phoneUtil.isValidNumber(number);
  } catch (error) {
    return false;
  }
}