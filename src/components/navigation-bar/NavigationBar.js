import styles from './NavigationBar.module.css';

const NavigationBar = () => {

  return (
    <section className={styles.bar}>
      <button className={styles.barButton}>Log in</button>
    </section>
  );

};

export default NavigationBar;
