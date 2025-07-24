# Strutils

A modern TypeScript utility library for string manipulation and validation.

[![npm version](https://badge.fury.io/js/strutils.svg)](https://badge.fury.io/js/strutils)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

## Features

- 🚀 **Modern**: Built with TypeScript 5+ and latest best practices
- 📦 **Tree-shakeable**: Import only what you need
- 🔒 **Type-safe**: Full TypeScript support with strict types
- 🧪 **Well-tested**: Comprehensive test coverage
- 📚 **Well-documented**: Complete API documentation
- 🔧 **Zero dependencies**: No external dependencies

## Installation

```bash
npm install strutils
```

```bash
yarn add strutils
```

```bash
pnpm add strutils
```

## Usage

### String Manipulation

```typescript
import {
  capitalize,
  toCamelCase,
  toKebabCase,
  toSnakeCase,
  truncate,
} from 'strutils';

// Capitalize first letter
capitalize('hello world'); // "Hello world"

// Convert to camelCase
toCamelCase('hello world'); // "helloWorld"

// Convert to kebab-case
toKebabCase('hello world'); // "hello-world"

// Convert to snake_case
toSnakeCase('hello world'); // "hello_world"

// Truncate with ellipsis
truncate('This is a long string', 10); // "This is..."
truncate('This is a long string', 10, '***'); // "This is***"
```

### Validation

```typescript
import {
  isString,
  isEmpty,
  isValidEmail,
  isValidUrl,
  isAlpha,
  isNumeric,
} from 'strutils';

// Type checking
isString('hello'); // true
isString(123); // false

// Empty string checking
isEmpty(''); // true
isEmpty('   '); // true
isEmpty('hello'); // false

// Email validation
isValidEmail('user@example.com'); // true
isValidEmail('invalid-email'); // false

// URL validation
isValidUrl('https://example.com'); // true
isValidUrl('invalid-url'); // false

// Character type checking
isAlpha('hello'); // true
isAlpha('hello123'); // false

isNumeric('123'); // true
isNumeric('12.34'); // false
```

## API Reference

### String Manipulation Functions

#### `capitalize(str: string): string`

Capitalizes the first letter of a string.

#### `toCamelCase(str: string): string`

Converts a string to camelCase.

#### `toKebabCase(str: string): string`

Converts a string to kebab-case.

#### `toSnakeCase(str: string): string`

Converts a string to snake_case.

#### `truncate(str: string, length: number, suffix?: string): string`

Truncates a string to a specified length with an optional suffix (default: '...').

### Validation Functions

#### `isString(value: unknown): value is string`

Type guard to check if a value is a string.

#### `isEmpty(str: string): boolean`

Checks if a string is empty or contains only whitespace.

#### `isValidEmail(email: string): boolean`

Validates if a string is a valid email address.

#### `isValidUrl(url: string): boolean`

Validates if a string is a valid URL.

#### `isAlpha(str: string): boolean`

Checks if a string contains only alphabetic characters.

#### `isNumeric(str: string): boolean`

Checks if a string contains only numeric characters.

## Development

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Setup

```bash
# Clone the repository
git clone https://github.com/najmiter/strutils.git
cd strutils

# Install dependencies
npm install

# Run tests
npm test

# Run tests with coverage
npm run test:coverage

# Build the library
npm run build

# Run linting
npm run lint

# Format code
npm run format
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
