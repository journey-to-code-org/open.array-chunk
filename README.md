# open.array-chunk

Dependency-free array chunking into fixed-size batches.

## Install

```bash
npm install @journey-to-code/open-array-chunk
```

## Usage

```js
chunkArray([1,2,3,4,5], 2); // [[1,2],[3,4],[5]]
```

## Runtime

- Node.js 18+
- modern ESM-capable tooling
- zero runtime dependencies

## Development

```bash
npm test
```

## Scope

This package intentionally focuses on one small, reusable responsibility.
Application-specific behavior belongs in higher-level packages.

## License

MIT
