import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('looks up JSON', () => {
  assert.equal(api.mimeFromExtension('.json'), 'application/json');
});
test('looks up case insensitively', () => {
  assert.equal(api.mimeFromExtension('PNG'), 'image/png');
});
test('looks up text', () => {
  assert.equal(api.mimeFromExtension('txt'), 'text/plain');
});
test('returns undefined for unknown extension', () => {
  assert.equal(api.mimeFromExtension('unknown'), undefined);
});
test('supports jpeg alias', () => {
  assert.equal(api.mimeFromExtension('.jpeg'), 'image/jpeg');
});
test('rejects non-string', () => {
  assert.throws(() => api.mimeFromExtension(1), TypeError);
});
