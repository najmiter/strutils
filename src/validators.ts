/**
 * Checks if a value is a string
 * @import `import { isString } from 'strutils'`
 * @param value - The value to check
 * @returns True if the value is a string
 *
 * ```ts
 * const result = isString('hello');
 * // result = true
 *
 * isString('hello'); // true
 * isString(''); // true
 * isString(123); // false
 * isString(null); // false
 * isString(undefined); // false
 * isString({}); // false
 * ```
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

/**
 * Checks if a string is empty or contains only whitespace
 * @import `import { isEmpty } from 'strutils'`
 * @param str - The string to check
 * @returns True if the string is empty or whitespace only
 *
 * ```ts
 * const result = isEmpty('');
 * // result = true
 *
 * isEmpty(''); // true
 * isEmpty(' '); // true
 * isEmpty('   '); // true
 * isEmpty('\t'); // true
 * isEmpty('\n'); // true
 * isEmpty(' \t\n '); // true
 * isEmpty('hello'); // false
 * isEmpty(' hello '); // false
 * ```
 */
export function isEmpty(str: string): boolean {
  return str.trim().length === 0;
}

/**
 * Checks if a string is a valid email address
 * @import `import { isValidEmail } from 'strutils'`
 * @param email - The email string to validate
 * @returns True if the email is valid
 *
 * ```ts
 * const result = isValidEmail('user@example.com');
 * // result = true
 *
 * isValidEmail('test@example.com'); // true
 * isValidEmail('user.name@domain.co.uk'); // true
 * isValidEmail('user+label@example.org'); // true
 * isValidEmail('invalid'); // false
 * isValidEmail('invalid@'); // false
 * isValidEmail('@invalid.com'); // false
 * isValidEmail('invalid@domain'); // false
 * ```
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Checks if a string is a valid URL
 * @import `import { isValidUrl } from 'strutils'`
 * @param url - The URL string to validate
 * @returns True if the URL is valid
 *
 * ```ts
 * const result = isValidUrl('https://example.com');
 * // result = true
 *
 * isValidUrl('https://example.com'); // true
 * isValidUrl('http://example.com'); // true
 * isValidUrl('https://www.example.com/path'); // true
 * isValidUrl('ftp://files.example.com'); // true
 * isValidUrl('invalid'); // false
 * isValidUrl('example.com'); // false
 * isValidUrl('http://'); // false
 * ```
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Checks if a string contains only alphabetic characters
 * @import `import { isAlpha } from 'strutils'`
 * @param str - The string to check
 * @returns True if the string contains only letters
 *
 * ```ts
 * const result = isAlpha('hello');
 * // result = true
 *
 * isAlpha('hello'); // true
 * isAlpha('HELLO'); // true
 * isAlpha('Hello'); // true
 * isAlpha('abcDEF'); // true
 * isAlpha('hello123'); // false
 * isAlpha('123'); // false
 * isAlpha('hello world'); // false
 * isAlpha('hello!'); // false
 * ```
 */
export function isAlpha(str: string): boolean {
  return /^[a-zA-Z]+$/.test(str);
}

/**
 * Checks if a string contains only numeric characters
 * @import `import { isNumeric } from 'strutils'`
 * @param str - The string to check
 * @returns True if the string contains only numbers
 *
 * ```ts
 * const result = isNumeric('123');
 * // result = true
 *
 * isNumeric('123'); // true
 * isNumeric('0'); // true
 * isNumeric('999'); // true
 * isNumeric('abc'); // false
 * isNumeric('123abc'); // false
 * isNumeric('12.34'); // false
 * isNumeric('12 34'); // false
 * isNumeric('-123'); // false
 * ```
 */
export function isNumeric(str: string): boolean {
  return /^\d+$/.test(str);
}
