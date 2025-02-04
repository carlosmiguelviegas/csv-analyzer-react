import styles from './NavigationBar.module.css';

const NavigationBar = () => {

  return (
    <nav className={styles.bar}>
      <button className={styles.barButton}>Log in</button>
    </nav>
  );

};

export default NavigationBar;
