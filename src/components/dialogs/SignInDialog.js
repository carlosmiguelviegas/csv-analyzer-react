import { useState } from 'react';
import styles from './SignInDialog.module.css';

const initialState = { email: '', password: '' };

const SignInDialog = () => {

  const [ loginForm, setLoginForm ] = useState(initialState);

  const changeHandler = e => {

    const { name, value } = e['target'];

    setLoginForm({
                    ...loginForm,
                    [name]: value
    });
  
  };

  return (
    <div className={styles.modal}>
      <section className={styles.container}>
        <h2>Sign in</h2>
        <form>
          <label htmlFor=''>Email</label>
          <input type='email' name='email' value={loginForm['email']} onChange={changeHandler} />
          <label htmlFor=''>Password</label>
          <input type='password' name='password' value={loginForm['password']} onChange={changeHandler} />
          <button type='submit'>Sign in</button>
        </form>
      </section>
    </div>
  );

};

export default SignInDialog;
