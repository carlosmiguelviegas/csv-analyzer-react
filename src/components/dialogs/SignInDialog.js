import styles from './SignInDialog.module.css';

const SignInDialog = () => {

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
