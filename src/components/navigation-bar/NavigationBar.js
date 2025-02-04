import { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './NavigationBar.module.css';

const NavigationBar = () => {

  const [ display, setDisplay ] = useState(false);

  return (
    <nav className={styles.bar}>
      <button className={styles.barButton} onClick={() => setDisplay(true)} >Log in</button>
      {display && createPortal(<p>sign in modal</p>, document.body)}
    </nav>
  );

};

export default NavigationBar;
