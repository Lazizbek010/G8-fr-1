import test from 'node:test';
import assert from 'node:assert/strict';
import router from '../src/router/index.js';

test('router includes home, properties, contact, login, and register pages', () => {
  const paths = router.getRoutes().map((route) => route.path);

  assert.ok(paths.includes('/'));
  assert.ok(paths.includes('/properties'));
  assert.ok(paths.includes('/contact'));
  assert.ok(paths.includes('/login'));
  assert.ok(paths.includes('/register'));
});
