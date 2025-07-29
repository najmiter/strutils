/**
 * Capitalizes the first letter of a string
 * @import `import { capitalize } from '@najmiter/strutils'`
 * @param str - The string to capitalize
 * @returns The capitalized string
 *
 * ```ts
 * const result = capitalize('hello world');
 * // result = 'Hello world'
 *
 * capitalize('HELLO'); // 'Hello'
 * capitalize('hELLO'); // 'Hello'
 * capitalize(''); // ''
 * ```
 */
export function capitalize(str: string): string {
  if (typeof str !== 'string') return '';
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}

/**
 * Converts a string to camelCase
 * @import `import { toCamelCase } from '@najmiter/strutils'`
 * @param str - The string to convert
 * @returns The camelCase string
 *
 * ```ts
 * const result = toCamelCase('hello world');
 * // result = 'helloWorld'
 *
 * toCamelCase('Hello World'); // 'helloWorld'
 * toCamelCase('HELLO WORLD'); // 'helloWorld'
 * toCamelCase('hello   world   test'); // 'helloWorldTest'
 * toCamelCase('helloWorld'); // 'helloWorld'
 * ```
 */
export function toCamelCase(str: string): string {
  if (typeof str !== 'string') return '';
  // If already camelCase (no spaces/hyphens/underscores), return as is
  if (!/[\s_-]/.test(str)) {
    return str.charAt(0).toLowerCase() + str.slice(1);
  }

  return str
    .toLowerCase()
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/[\s_-]+/g, '');
}

/**
 * Converts a string to kebab-case
 * @import `import { toKebabCase } from '@najmiter/strutils'`
 * @param str - The string to convert
 * @returns The kebab-case string
 *
 * ```ts
 * const result = toKebabCase('hello world');
 * // result = 'hello-world'
 *
 * toKebabCase('Hello World'); // 'hello-world'
 * toKebabCase('helloWorld'); // 'hello-world'
 * toKebabCase('hello_world'); // 'hello-world'
 * toKebabCase('hello-world'); // 'hello-world'
 * ```
 */
export function toKebabCase(str: string): string {
  if (typeof str !== 'string') return '';
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/**
 * Converts a string to snake_case
 * @import `import { toSnakeCase } from '@najmiter/strutils'`
 * @param str - The string to convert
 * @returns The snake_case string
 *
 * ```ts
 * const result = toSnakeCase('hello world');
 * // result = 'hello_world'
 *
 * toSnakeCase('Hello World'); // 'hello_world'
 * toSnakeCase('helloWorld'); // 'hello_world'
 * toSnakeCase('hello-world'); // 'hello_world'
 * toSnakeCase('hello_world'); // 'hello_world'
 * ```
 */
export function toSnakeCase(str: string): string {
  if (typeof str !== 'string') return '';
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[\s-]+/g, '_')
    .toLowerCase();
}

/**
 * Truncates a string to a specified length
 * @import `import { truncate } from '@najmiter/strutils'`
 * @param str - The string to truncate
 * @param length - The maximum length
 * @param suffix - The suffix to append (default: '...')
 * @returns The truncated string
 *
 * ```ts
 * const result = truncate('hello world', 5);
 * // result = 'he...'
 *
 * truncate('hello world', 8); // 'hello...'
 * truncate('hello', 5); // 'hello'
 * truncate('hello', 10); // 'hello'
 * truncate('hello world', 5, '***'); // 'he***'
 * truncate('hello', 0); // '...'
 * ```
 */
export function truncate(
  str: string,
  length: number,
  suffix: string = '...'
): string {
  if (typeof str !== 'string') return '';
  if (str.length <= length) return str;
  if (length <= 0) return suffix;
  return str.slice(0, length - suffix.length) + suffix;
}

/**
 * Pascalizes the first letter of each word of a string
 * @import `import { pascalize } from '@najmiter/strutils'`
 * @param str - The string to pascalize
 * @returns The pascalized string
 *
 * ```ts
 * const result = pascalize('hello world');
 * // result = 'Hello World'
 *
 * pascalize('HELLO'); // 'Hello'
 * pascalize('hELLO WORLD'); // 'Hello World'
 * pascalize(''); // ''
 * ```
 */
export function pascalize(str: string): string {
  if (typeof str !== 'string') return '';
  if (!str) return '';
  return str
    .trim()
    .toLowerCase()
    .replace(/(?:^|\s)\w/g, match => match.toUpperCase())
    .replace(/\s+/g, ' ');
}
