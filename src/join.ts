/**
 * (Concatenate Strings) - Concatenate variable amount of strings or numbers separated by empty spaces
 * @import `import { cs } from 'strutils'`
 * @param strings The strings | numbers to merge.
 * @return Returns the merged string.
 *
 * ```ts
 * const result = cs('this', 1, 'strings');
 * // result = 'this 1 strings'
 * ```
 */
export function cs(...strings: Array<string | number | undefined>): string {
  return strings
    .map(s => s?.toString()?.trim() || '')
    .filter(s => s)
    .join(' ');
}

/**
 * (Join Strings) - Join variable amount of strings or numbers
 * @import `import { js } from 'strutils'`
 * @param strings The strings | numbers to merge.
 * @return Returns the merged string.
 *
 * ```ts
 * const result = js('this', 1, 'strings');
 * // result = 'this1strings'
 * ```
 */
export function js(...strings: Array<string | number | undefined>): string {
  return ''.concat(...strings.map(s => s?.toString() || ''));
}

/**
 * (Join Path) - Join variable amount of strings or numbers
 * @import `import { jp } from 'strutils'`
 * @param strings The strings | numbers to merge.
 * @return Returns the path string.
 *
 * ```ts
 * const result = jp('this', 1, 'strings');
 * // result = 'this/1/strings'
 * ```
 */
export function jp(...strings: Array<string | number | undefined>): string {
  if (strings.length === 0) {
    return '';
  }
  const path = strings
    .map(s => s?.toString()?.trim())
    .filter(s => s)
    .join('/');

  if (!path) return path;

  if (!path.startsWith('/')) {
    return js('/', path);
  }
  return path;
}
