import { useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './NavigationBar.module.css';
import SignInDialog from '../dialogs/SignInDialog';

const NavigationBar = ({ isSignedIn, setIsSignedIn }) => {

  const [ display, setDisplay ] = useState(false);

  return (
    <nav className={styles.bar}>
      {!isSignedIn && <button className={styles.barButton} onClick={() => setDisplay(true)} >Log in</button>}
      {display && createPortal(<SignInDialog  setDisplay={setDisplay} setIsSignedIn={setIsSignedIn} />, document.body)}
    </nav>
  );

};

export default NavigationBar;
