import { useState } from 'react';
import styles from './App.module.css';
import axios from 'axios';

const App = () => {

  const [ active, setActive ] = useState(false);

  const handlerOnDrop = async event => {
    event.preventDefault();
    const files = Array.from(event['dataTransfer']['files']);
    const formData = new FormData();
    formData.append('file', files[0]);
    await axios.post('http://localhost:8000/analyze', formData, { 'content-type': 'multipart/form-data' });
 };

  return (
    <section className={styles.container}>
      <section className={styles.section `${active ? styles.active : ''}`} onDragOver={(e) => e.preventDefault()} onDrop={(e) => handlerOnDrop(e)}
        onDragEnter={() => setActive(true)} onDragLeave={() => setActive(false)} >
      </section>
    </section>
  );

}

export default App;
