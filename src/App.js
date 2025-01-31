import { useState } from 'react';
import styles from './App.module.css';
import axios from 'axios';
import { GiCheckMark } from "react-icons/gi";

const initialState = { isActive: false, isSuccess: false };

const App = () => {

  const [ state, setState ] = useState(initialState);

  const handlerOnDragOver = async event => {
    event.preventDefault();
    setState({ ...state, isSuccess: false });
 };

  const handlerOnDrop = async event => {
    event.preventDefault();
    const files = Array.from(event['dataTransfer']['files']);
    const formData = new FormData();
    formData.append('file', files[0]);
    const { status } = await axios.post('http://localhost:8000/analyze', formData, { 'content-type': 'multipart/form-data' });
    setState({ ...state, isSuccess: status === 200 ? true : false });
 };

  return (
    <section className={styles.container}>
      <section className={`${styles.section} ${state['isActive'] ? styles.active : ''}`} onDragOver={(e) => handlerOnDragOver(e)} onDrop={(e) => handlerOnDrop(e)}
        onDragEnter={() => setState({ ...state, isActive: true })} onDragLeave={() => setState({ ...state, isActive: false })} >
          {state['isSuccess'] && <GiCheckMark className={styles.checkMark} />}
      </section>
    </section>
  );

}

export default App;
