import { useState } from 'react';
import axios from 'axios';

import styles from './SignInDialog.module.css';
import { IoMdCloseCircleOutline } from "react-icons/io";

const initialState = { email: '', password: '' };

const SignInDialog = ({ setDisplay, setIsSignedIn }) => {

  const [ loginForm, setLoginForm ] = useState(initialState);

  const changeHandler = e => {

    const { name, value } = e['target'];

    setLoginForm({
                    ...loginForm,
                    [name]: value
    });
  
  };

  const submitHandler = async e => {
    e.preventDefault();
    const { status } = await axios.post('http://localhost:8000/api/v1/auth/signin', loginForm);
    if (status === 200) {
      setIsSignedIn(true);
      setDisplay(false);
    } else {
      setIsSignedIn(false);
    }
  };

  return (
    <div className={styles.modal}>
      <section className={styles.container}>
        <h2 className={styles.title}>Sign in</h2><IoMdCloseCircleOutline className={styles.closeIcon} onClick={() => setDisplay(false)} />
        <form onSubmit={submitHandler} className={styles.form}>
          <article className={styles.formGroup}>
            <label className={styles.label} htmlFor='email'>Email</label>
            <input type='email' name='email' id='email' value={loginForm['email']} onChange={changeHandler} />
          </article>
           <article className={styles.formGroup}>
            <label className={styles.label} htmlFor='password'>Password</label>
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
