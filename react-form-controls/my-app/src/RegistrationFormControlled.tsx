import { FormEvent } from 'react';
import { useState } from 'react';

export function RegistrationFormControlled() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(`username: ${user}, password: ${pass}`);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username
        <input
          name="username"
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
      </label>
      <label>
        Password
        <input
          type="password"
          name="password"
          onChange={(e) => {
            setPass(e.target.value);
          }}
        />
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
}
