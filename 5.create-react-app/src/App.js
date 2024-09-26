import Button from './Button';
import styles from './App.module.css'; // css 모듈화해서 사용하기

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcom back!!!</h1>
      <Button text={'continue'} />
    </div>
  );
}

export default App;
