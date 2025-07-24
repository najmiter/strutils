import {
  isString,
  isEmpty,
  isValidEmail,
  isValidUrl,
  isAlpha,
  isNumeric,
} from '../validators';

describe('Validators', () => {
  describe('isString', () => {
    it('should return true for strings', () => {
      expect(isString('hello')).toBe(true);
      expect(isString('')).toBe(true);
      expect(isString('123')).toBe(true);
    });

    it('should return false for non-strings', () => {
      expect(isString(123)).toBe(false);
      expect(isString(null)).toBe(false);
      expect(isString(undefined)).toBe(false);
      expect(isString({})).toBe(false);
      expect(isString([])).toBe(false);
      expect(isString(true)).toBe(false);
    });
  });

  describe('isEmpty', () => {
    it('should return true for empty or whitespace-only strings', () => {
      expect(isEmpty('')).toBe(true);
      expect(isEmpty(' ')).toBe(true);
      expect(isEmpty('   ')).toBe(true);
      expect(isEmpty('\t')).toBe(true);
      expect(isEmpty('\n')).toBe(true);
      expect(isEmpty(' \t\n ')).toBe(true);
    });

    it('should return false for non-empty strings', () => {
      expect(isEmpty('hello')).toBe(false);
      expect(isEmpty(' hello ')).toBe(false);
      expect(isEmpty('a')).toBe(false);
    });
  });

  describe('isValidEmail', () => {
    it('should return true for valid email addresses', () => {
      expect(isValidEmail('test@example.com')).toBe(true);
      expect(isValidEmail('user.name@domain.co.uk')).toBe(true);
      expect(isValidEmail('user+label@example.org')).toBe(true);
    });

    it('should return false for invalid email addresses', () => {
      expect(isValidEmail('invalid')).toBe(false);
      expect(isValidEmail('invalid@')).toBe(false);
      expect(isValidEmail('@invalid.com')).toBe(false);
      expect(isValidEmail('invalid@domain')).toBe(false);
      expect(isValidEmail('invalid.domain.com')).toBe(false);
      expect(isValidEmail('')).toBe(false);
    });
  });

  describe('isValidUrl', () => {
    it('should return true for valid URLs', () => {
      expect(isValidUrl('https://example.com')).toBe(true);
      expect(isValidUrl('http://example.com')).toBe(true);
      expect(isValidUrl('https://www.example.com/path')).toBe(true);
      expect(isValidUrl('ftp://files.example.com')).toBe(true);
    });

    it('should return false for invalid URLs', () => {
      expect(isValidUrl('invalid')).toBe(false);
      expect(isValidUrl('example.com')).toBe(false);
      expect(isValidUrl('http://')).toBe(false);
      expect(isValidUrl('')).toBe(false);
    });
  });

  describe('isAlpha', () => {
    it('should return true for alphabetic strings', () => {
      expect(isAlpha('hello')).toBe(true);
      expect(isAlpha('HELLO')).toBe(true);
      expect(isAlpha('Hello')).toBe(true);
      expect(isAlpha('abcDEF')).toBe(true);
    });

    it('should return false for non-alphabetic strings', () => {
      expect(isAlpha('hello123')).toBe(false);
      expect(isAlpha('123')).toBe(false);
      expect(isAlpha('hello world')).toBe(false);
      expect(isAlpha('hello!')).toBe(false);
      expect(isAlpha('')).toBe(false);
    });
  });

  describe('isNumeric', () => {
    it('should return true for numeric strings', () => {
      expect(isNumeric('123')).toBe(true);
      expect(isNumeric('0')).toBe(true);
      expect(isNumeric('999')).toBe(true);
    });

    it('should return false for non-numeric strings', () => {
      expect(isNumeric('abc')).toBe(false);
      expect(isNumeric('123abc')).toBe(false);
      expect(isNumeric('12.34')).toBe(false);
      expect(isNumeric('12 34')).toBe(false);
      expect(isNumeric('')).toBe(false);
      expect(isNumeric('-123')).toBe(false);
    });
  });
});
