import test from 'node:test';
import assert from 'node:assert/strict';
import router from '../src/router/index.js';

test('router includes home, properties, and contact pages', () => {
  const paths = router.getRoutes().map((route) => route.path);

  assert.ok(paths.includes('/'));
  assert.ok(paths.includes('/properties'));
  assert.ok(paths.includes('/contact'));
});
