// ts-loader.mjs
import { register } from 'node:module';
import { pathToFileURL } from 'node:url';

// Register ts-node/esm as a loader for TypeScript in ESM mode
register('ts-node/esm', pathToFileURL('./'));
