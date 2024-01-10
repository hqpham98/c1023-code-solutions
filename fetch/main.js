async function getStuff() {
  try {
    const result = await fetch('https://jsonplaceholder.typicode.com/users/');
    if (result.ok) {
      console.log('user objects:', await result.json());
    } else {
      console.log(`Error, Response Code: ${result.status}`);
    }
  } catch (err) {
    console.log(err);
  }
}
getStuff();
