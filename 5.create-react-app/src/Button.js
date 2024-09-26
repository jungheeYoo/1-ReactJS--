import PropTypes from 'prop-types'; // props 타입 지정 설치 후 import 해옴
import styles from './Button.module.css';

function Button({ text }) {
  /* return (
    <button style={{ backgroundColor: 'tomato', color: 'white' }}>
      {text}
    </button>
  ); */
  return <button className={styles.btn}>{text}</button>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
