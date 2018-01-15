import { greet } from '../../src/index';

test('greet() to equal "hello world"', () => {
  expect(greet()).toEqual('hello world');
});
