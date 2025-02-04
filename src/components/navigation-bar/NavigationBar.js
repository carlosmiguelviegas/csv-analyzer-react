import { useState } from 'react';
import styles from './NavigationBar.module.css';

const NavigationBar = () => {

  const [ display, setDisplay ] = useState(false);

  return (
    <nav className={styles.bar}>
      <button className={styles.barButton} onClick={} >Log in</button>
    </nav>
  );

};

export default NavigationBar;
