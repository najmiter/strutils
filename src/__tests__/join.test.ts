import { cs, js, jp } from '../join';

describe('Join Utils', () => {
  describe('cs (Concatenate Strings)', () => {
    it('should concatenate strings with spaces', () => {
      expect(cs('this', 'is', 'test')).toBe('this is test');
      expect(cs('hello', 'world')).toBe('hello world');
    });

    it('should handle numbers', () => {
      expect(cs('this', 1, 'strings')).toBe('this 1 strings');
      expect(cs(1, 2, 3)).toBe('1 2 3');
    });

    it('should handle undefined values', () => {
      expect(cs('hello', undefined, 'world')).toBe('hello world');
      expect(cs(undefined, 'test', undefined)).toBe('test');
    });

    it('should handle mixed types', () => {
      expect(cs('count:', 42, 'items')).toBe('count: 42 items');
    });

    it('should handle empty inputs', () => {
      expect(cs()).toBe('');
      expect(cs('')).toBe('');
      expect(cs('', '', '')).toBe('');
    });

    it('should trim the result', () => {
      expect(cs(' hello ', ' world ')).toBe('hello world');
    });
  });

  describe('js (Join Strings)', () => {
    it('should join strings without spaces', () => {
      expect(js('this', 'is', 'test')).toBe('thisistest');
      expect(js('hello', 'world')).toBe('helloworld');
    });

    it('should handle numbers', () => {
      expect(js('this', 1, 'strings')).toBe('this1strings');
      expect(js(1, 2, 3)).toBe('123');
    });

    it('should handle undefined values', () => {
      expect(js('hello', undefined, 'world')).toBe('helloworld');
      expect(js(undefined, 'test', undefined)).toBe('test');
    });

    it('should handle mixed types', () => {
      expect(js('count:', 42, 'items')).toBe('count:42items');
    });

    it('should handle empty inputs', () => {
      expect(js()).toBe('');
      expect(js('')).toBe('');
      expect(js('', '', '')).toBe('');
    });
  });

  describe('jp (Join Path)', () => {
    it('should join path segments with forward slashes', () => {
      expect(jp('users', 'john', 'documents')).toBe('/users/john/documents');
      expect(jp('api', 'v1', 'users')).toBe('/api/v1/users');
      expect(jp('api', 'v1', 'users')).toBe('/api/v1/users');
    });

    it('should handle numbers', () => {
      expect(jp('api', 'v1', 42, 'items')).toBe('/api/v1/42/items');
      expect(jp('folder', 2023, 'files')).toBe('/folder/2023/files');
    });

    it('should filter out empty segments', () => {
      expect(jp('users', '', 'john')).toBe('/users/john');
      expect(jp('', 'api', '', 'v1', '')).toBe('/api/v1');
    });

    it('should handle undefined values', () => {
      expect(jp('users', undefined, 'john')).toBe('/users/john');
      expect(jp(undefined, 'api', undefined)).toBe('/api');
    });

    it('should handle whitespace-only segments', () => {
      expect(jp('users', '   ', 'john')).toBe('/users/john');
      expect(jp('api', '\t', 'v1')).toBe('/api/v1');
    });

    it('should handle empty inputs', () => {
      expect(jp()).toBe('');
      expect(jp('')).toBe('');
      expect(jp('', '', '')).toBe('');
    });

    it('should trim the result', () => {
      expect(jp(' users ', ' john ')).toBe('/users/john');
    });
  });
});
