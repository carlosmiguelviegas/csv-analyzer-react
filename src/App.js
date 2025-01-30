import styles from './App.module.css';

const App = () => {

  const handlerOnDrop = async event => {
    // it was intentional
 };

  return (
    <section className={styles.container}>
      <section className={styles.section} onDragOver={(e) => e.preventDefault()} onDrop={(e) => handlerOnDrop(e)} ></section>
    </section>
  );

}

export default App;
