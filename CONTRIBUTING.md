# Contributing to StrUtils

We love your input! We want to make contributing to this project as easy and transparent as possible.

## Development Process

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue that pull request!

## Setup Development Environment

```bash
# Clone your fork
git clone https://github.com/yourusername/strutils.git
cd strutils

# Install dependencies
npm install

# Run tests
npm test

# Start development mode
npm run dev
```

## Pull Request Process

1. Update the README.md with details of changes to the interface
2. Update the CHANGELOG.md following [Keep a Changelog](https://keepachangelog.com/en/1.0.0/) format
3. Increase the version numbers in package.json to the new version that this Pull Request would represent
4. The PR will be merged once you have the sign-off of two other developers

## Coding Standards

- Use TypeScript for all code
- Follow the existing code style (enforced by ESLint and Prettier)
- Write comprehensive tests for new features
- Document all public APIs with JSDoc comments
- Keep functions small and focused
- Use descriptive variable and function names

## Testing

- Write unit tests for all new functionality
- Maintain or improve code coverage
- Test edge cases and error conditions
- Use descriptive test names

## Commit Messages

Use the conventional commit format:

```
type(scope): description

[optional body]

[optional footer]
```

Types:

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools

## License

By contributing, you agree that your contributions will be licensed under the MIT License.
