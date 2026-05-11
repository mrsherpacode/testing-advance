# Advance Testing

A Node.js project demonstrating token generation using JWT (jsonwebtoken) with comprehensive testing using Vitest.

## Description

This project showcases how to generate JWT tokens with both callback-based and promise-based approaches. It includes unit tests to verify token generation functionality.

## Installation

```bash
npm install
```

## Dependencies

- **jsonwebtoken**: For creating and signing JWT tokens
- **vitest**: For running tests (dev dependency)

## Usage

### Token Generation

The project provides two functions for generating tokens:

1. **Callback-based**:

   ```javascript
   generateToken("test@gmail.com", (err, token) => {
     console.log(token);
   });
   ```

2. **Promise-based**:
   ```javascript
   generateTokenPromise("test@gmail.com").then((token) => {
     console.log(token);
   });
   ```

## Running Tests

```bash
npm test
```

Tests are located in `example.test.js` and validate token generation functionality.

## Project Structure

- `example.js` - Main token generation functions
- `example.test.js` - Test suite
- `package.json` - Project configuration
- `.gitignore` - Git ignore rules

## License

ISC
