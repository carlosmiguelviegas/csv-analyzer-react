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
          <input type='email' />
          <label htmlFor=''>Password</label>
          <input type='password' />
          <button type='submit'>Sign in</button>
        </form>
      </section>
    </div>
  );

};

export default SignInDialog;
