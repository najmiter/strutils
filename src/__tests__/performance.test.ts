import { performance } from 'perf_hooks';
import {
  capitalize,
  toCamelCase,
  toKebabCase,
  toSnakeCase,
  truncate,
} from '../string-utils';
import { cs, js, jp } from '../join';
import { isValidEmail, isValidUrl } from '../validators';

interface BenchmarkResult {
  function: string;
  iterations: number;
  totalTime: number;
  averageTime: number;
  opsPerSecond: number;
}

function benchmark(
  fn: () => void,
  iterations: number = 10000
): BenchmarkResult {
  const start = performance.now();

  for (let i = 0; i < iterations; i++) {
    fn();
  }

  const end = performance.now();
  const totalTime = end - start;
  const averageTime = totalTime / iterations;
  const opsPerSecond = 1000 / averageTime;

  return {
    function: fn.name,
    iterations,
    totalTime,
    averageTime,
    opsPerSecond,
  };
}

describe('Performance Benchmarks', () => {
  const testString = 'hello world test string';
  const testEmail = 'test@example.com';
  const testUrl = 'https://example.com/path';

  it('should benchmark string utilities', () => {
    const results: BenchmarkResult[] = [
      benchmark(() => capitalize(testString)),
      benchmark(() => toCamelCase(testString)),
      benchmark(() => toKebabCase(testString)),
      benchmark(() => toSnakeCase(testString)),
      benchmark(() => truncate(testString, 10)),
    ];

    console.log('\n📊 String Utilities Benchmark Results:');
    console.table(
      results.map(r => ({
        Function: r.function,
        'Ops/sec': Math.round(r.opsPerSecond).toLocaleString(),
        'Avg Time (ms)': r.averageTime.toFixed(4),
      }))
    );

    // Ensure reasonable performance (> 10k ops/sec)
    results.forEach(result => {
      expect(result.opsPerSecond).toBeGreaterThan(10000);
    });
  });

  it('should benchmark join utilities', () => {
    const results: BenchmarkResult[] = [
      benchmark(() => cs('hello', 'world', 'test')),
      benchmark(() => js('hello', 'world', 'test')),
      benchmark(() => jp('api', 'v1', 'users')),
    ];

    console.log('\n📊 Join Utilities Benchmark Results:');
    console.table(
      results.map(r => ({
        Function: r.function,
        'Ops/sec': Math.round(r.opsPerSecond).toLocaleString(),
        'Avg Time (ms)': r.averageTime.toFixed(4),
      }))
    );

    // Ensure reasonable performance (> 10k ops/sec)
    results.forEach(result => {
      expect(result.opsPerSecond).toBeGreaterThan(10000);
    });
  });

  it('should benchmark validators', () => {
    const results: BenchmarkResult[] = [
      benchmark(() => isValidEmail(testEmail)),
      benchmark(() => isValidUrl(testUrl)),
    ];

    console.log('\n📊 Validators Benchmark Results:');
    console.table(
      results.map(r => ({
        Function: r.function,
        'Ops/sec': Math.round(r.opsPerSecond).toLocaleString(),
        'Avg Time (ms)': r.averageTime.toFixed(4),
      }))
    );

    // Ensure reasonable performance (> 10k ops/sec)
    results.forEach(result => {
      expect(result.opsPerSecond).toBeGreaterThan(10000);
    });
  });
});
