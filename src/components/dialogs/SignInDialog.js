import { useState } from 'react';
import styles from './SignInDialog.module.css';

const initialState = { email: '', password: '' };

const SignInDialog = ({ setDisplay }) => {

  const [ loginForm, setLoginForm ] = useState(initialState);

  const changeHandler = e => {

    const { name, value } = e['target'];

    setLoginForm({
                    ...loginForm,
                    [name]: value
    });
  
  };

  const submitHandler = e => e.preventDefault();

  return (
    <div className={styles.modal}>
      <section className={styles.container}>
        <article className={styles.header}>
          <h2>Sign in</h2><span onClick={() => setDisplay(false)}>x</span>
        </article>
        <form onSubmit={submitHandler} className={styles.form}>
          <article className={styles.formGroup}>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' value={loginForm['email']} onChange={changeHandler} />
          </article>
           <article className={styles.formGroup}>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' value={loginForm['password']} onChange={changeHandler} />
          </article>
          <hr />
          <div className={styles.buttonsContainer}>
            <button type='submit' className={styles.button}>Sign in</button>
          </div>
        </form>
      </section>
    </div>
  );

};

export default SignInDialog;
