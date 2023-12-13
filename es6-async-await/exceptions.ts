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
  try {
    console.log(elapsed(), 'throwOnce:', await read('foo', true));
  } catch (error) {
    console.log(elapsed(), 'throwOnce Error:', error);
  }
}

async function throwSeveral(): Promise<void> {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log `error` so that
  // you get the stack trace.

  try {
    console.log(elapsed(), 'throwSeveral1:', await read('foo1', true));
    console.log(elapsed(), 'throwSeveral2:', await read('foo2', true));
    console.log(elapsed(), 'throwSeveral3:', await read('foo3', true));
  } catch (error) {
    console.log(elapsed(), 'throwSeveral Error:', error);
  }
}

async function throwChained(): Promise<void> {
  try {
    const msg1 = await read('foo-chain1', true);
    console.log(elapsed(), 'throwChained1:', msg1);
    const msg2 = await read('msg1', true);
    console.log(elapsed(), 'throwChained2:', msg2);
    const msg3 = await read('msg2', true);
    console.log(elapsed(), 'throwChained3:', msg3);
  } catch (error) {
    console.log(elapsed(), 'throwChained Error:', error);
  }
}

await throwOnce();
await throwSeveral();
await throwChained();
