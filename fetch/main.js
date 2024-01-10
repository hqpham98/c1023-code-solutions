async function getStuff() {
  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/users/');
    if (!result.ok) {
      throw Error(`Error, Response Code: ${result.status}`);
    }
    console.log('user objects:', await result.json());
  } catch (err) {
    console.log(err);
  }
}
getStuff();
