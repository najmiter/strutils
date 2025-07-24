import * as strutils from '../index';

describe('Index exports', () => {
  it('should export all string utilities', () => {
    expect(typeof strutils.capitalize).toBe('function');
    expect(typeof strutils.toCamelCase).toBe('function');
    expect(typeof strutils.toKebabCase).toBe('function');
    expect(typeof strutils.toSnakeCase).toBe('function');
    expect(typeof strutils.truncate).toBe('function');
  });

  it('should export all join utilities', () => {
    expect(typeof strutils.cs).toBe('function');
    expect(typeof strutils.js).toBe('function');
    expect(typeof strutils.jp).toBe('function');
  });

  it('should export all validators', () => {
    expect(typeof strutils.isString).toBe('function');
    expect(typeof strutils.isEmpty).toBe('function');
    expect(typeof strutils.isValidEmail).toBe('function');
    expect(typeof strutils.isValidUrl).toBe('function');
    expect(typeof strutils.isAlpha).toBe('function');
    expect(typeof strutils.isNumeric).toBe('function');
  });

  it('should export version', () => {
    expect(typeof strutils.version).toBe('string');
    expect(strutils.version).toBe('1.0.0');
  });
});
