import { useState } from 'react';
import { FcCheckmark, FcCancel } from 'react-icons/fc';

export function ValidatedInput() {
  const [pass, setPass] = useState<string>('');
  const [valid, setValid] = useState<boolean>(false);

  function PasswordWarning() {
    if (!pass) {
      setValid(false);
      return <p>A password is required.</p>;
    }
    if (pass.length < 8) {
      setValid(false);
      return <p>Your password is too short.</p>;
    }
    setValid(true);
  }

  return (
    <label>
      <p>Password</p>
      <input
        name="password"
        onChange={(e) => setPass(e.currentTarget.value)}
        value={pass}></input>
      {valid ? <FcCheckmark /> : <FcCancel />}
      <PasswordWarning />
    </label>
  );
}
