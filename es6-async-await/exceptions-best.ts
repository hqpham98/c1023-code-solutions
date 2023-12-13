import { read } from './read.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = (): string =>
  `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce(): Promise<void> {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log the entire error so that
  // you get the stack trace.

  console.log(elapsed(), 'throwOnce:', await read('foo', true));
}

async function throwSeveral(): Promise<void> {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log `error` so that
  // you get the stack trace.

  console.log(elapsed(), 'throwSeveral1:', await read('foo1', true));
  console.log(elapsed(), 'throwSeveral2:', await read('foo2', true));
  console.log(elapsed(), 'throwSeveral3:', await read('foo3', true));
}

async function throwChained(): Promise<void> {
  console.log(elapsed(), 'throwChained1:', await read('foo-chain1', true));
  console.log(elapsed(), 'throwChained2:', await read('foo-chain2', true));
  console.log(elapsed(), 'throwChained3:', await read('foo-chain3', true));
}

try {
  throwOnce();
  throwSeveral();
  throwChained();
} catch (error) {
  console.log(elapsed(), error);
}
