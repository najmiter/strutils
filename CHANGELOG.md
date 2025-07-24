# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-07-24

### Added

- Initial release of StrUtils
- String manipulation functions:
  - `capitalize()` - Capitalize first letter
  - `toCamelCase()` - Convert to camelCase
  - `toKebabCase()` - Convert to kebab-case
  - `toSnakeCase()` - Convert to snake_case
  - `truncate()` - Truncate with optional suffix
- Validation functions:
  - `isString()` - Type guard for strings
  - `isEmpty()` - Check for empty/whitespace strings
  - `isValidEmail()` - Email validation
  - `isValidUrl()` - URL validation
  - `isAlpha()` - Alphabetic character check
  - `isNumeric()` - Numeric character check
- Complete TypeScript support
- Comprehensive test suite
- Full documentation
- Modern build system with Rollup
- ESLint and Prettier configuration
