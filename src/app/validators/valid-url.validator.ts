import { AbstractControl } from '@angular/forms';

// Custom validator function for URL validation
export function isValidUrl(control: AbstractControl): { [key: string]: boolean } | null {
  const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;
  if (!urlPattern.test(control.value)) {
    return { 'invalidUrl': true };
  }
  return null;
}