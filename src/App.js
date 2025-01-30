import styles from './App.module.css';

const App = () => {

  const handlerOnDrop = async event => {
    event.preventDefault();
    const files = Array.from(event['dataTransfer']['files']);
    const formData = new FormData();
    formData.append('file', files[0]);
    await axios.post('http://localhost:8000/analyze', formData, { 'content-type': 'multipart/form-data' });
 };

  return (
    <section className={styles.container}>
      <section className={styles.section} onDragOver={(e) => e.preventDefault()} onDrop={(e) => handlerOnDrop(e)} ></section>
    </section>
  );

}

export default App;
