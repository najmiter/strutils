import {
  capitalize,
  toCamelCase,
  toKebabCase,
  toSnakeCase,
  truncate,
} from '../string-utils';

describe('String Utils', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter of a string', () => {
      expect(capitalize('hello')).toBe('Hello');
      expect(capitalize('HELLO')).toBe('Hello');
      expect(capitalize('hELLO')).toBe('Hello');
    });

    it('should handle empty strings', () => {
      expect(capitalize('')).toBe('');
    });

    it('should handle single character strings', () => {
      expect(capitalize('a')).toBe('A');
      expect(capitalize('A')).toBe('A');
    });
  });

  describe('toCamelCase', () => {
    it('should convert strings to camelCase', () => {
      expect(toCamelCase('hello world')).toBe('helloWorld');
      expect(toCamelCase('Hello World')).toBe('helloWorld');
      expect(toCamelCase('HELLO WORLD')).toBe('helloWorld');
    });

    it('should handle strings with multiple spaces', () => {
      expect(toCamelCase('hello   world   test')).toBe('helloWorldTest');
    });

    it('should handle already camelCase strings', () => {
      expect(toCamelCase('helloWorld')).toBe('helloWorld');
    });
  });

  describe('toKebabCase', () => {
    it('should convert strings to kebab-case', () => {
      expect(toKebabCase('hello world')).toBe('hello-world');
      expect(toKebabCase('Hello World')).toBe('hello-world');
      expect(toKebabCase('helloWorld')).toBe('hello-world');
    });

    it('should handle strings with underscores', () => {
      expect(toKebabCase('hello_world')).toBe('hello-world');
    });

    it('should handle already kebab-case strings', () => {
      expect(toKebabCase('hello-world')).toBe('hello-world');
    });
  });

  describe('toSnakeCase', () => {
    it('should convert strings to snake_case', () => {
      expect(toSnakeCase('hello world')).toBe('hello_world');
      expect(toSnakeCase('Hello World')).toBe('hello_world');
      expect(toSnakeCase('helloWorld')).toBe('hello_world');
    });

    it('should handle strings with hyphens', () => {
      expect(toSnakeCase('hello-world')).toBe('hello_world');
    });

    it('should handle already snake_case strings', () => {
      expect(toSnakeCase('hello_world')).toBe('hello_world');
    });
  });

  describe('truncate', () => {
    it('should truncate strings longer than the specified length', () => {
      expect(truncate('hello world', 5)).toBe('he...');
      expect(truncate('hello world', 8)).toBe('hello...');
    });

    it('should not truncate strings shorter than or equal to the specified length', () => {
      expect(truncate('hello', 5)).toBe('hello');
      expect(truncate('hello', 10)).toBe('hello');
    });

    it('should use custom suffix', () => {
      expect(truncate('hello world', 5, '***')).toBe('he***');
    });

    it('should handle edge cases', () => {
      expect(truncate('', 5)).toBe('');
      expect(truncate('hello', 0)).toBe('...');
    });
  });
});
