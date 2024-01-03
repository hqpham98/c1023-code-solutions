import { ChangeEvent, useState } from 'react';
import { FcCheckmark, FcCancel } from 'react-icons/fc';

export function ValidatedInput() {
  const [pass1, setPass1] = useState<string>('');
  const [pass2, setPass2] = useState<string>('');
  const [pass3, setPass3] = useState<string>('');

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    if (e.currentTarget.name == 'pass1') {
      setPass1(e.currentTarget.value);
    }
    if (e.currentTarget.name == 'pass2') {
      setPass2(e.currentTarget.value);
    }
    if (e.currentTarget.name == 'pass3') {
      setPass3(e.currentTarget.value);
    }
  }

  function PasswordWarning({ pass }: Record<string, string>) {
    if (!pass) {
      return <p>A password is required.</p>;
    }
    if (pass.length < 8) {
      return <p>Your password is too short.</p>;
    }
  }

  function ValidPass({ pass }: Record<string, string>) {
    if (!pass || pass.length < 8) {
      return <FcCancel />;
    }
    return <FcCheckmark />;
  }

  return (
    <>
      <label>
        <p>Password</p>
        <input name="pass1" onChange={handleInput}></input>
        <ValidPass pass={pass1} />
        <PasswordWarning pass={pass1} />
      </label>
      <label>
        <p>Password</p>
        <input name="pass2" onChange={handleInput}></input>
        <ValidPass pass={pass2} />
        <PasswordWarning pass={pass2} />
      </label>
      <label>
        <p>Password</p>
        <input name="pass3" onChange={handleInput}></input>
        <ValidPass pass={pass3} />
        <PasswordWarning pass={pass3} />
      </label>
    </>
  );
}
