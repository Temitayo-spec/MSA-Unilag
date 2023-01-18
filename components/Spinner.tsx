import styles from '../styles/Spinner.module.css';

const Spinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.spinner__inner}>
        <div className={styles.spinner__circle}></div>
      </div>
    </div>
  );
};

export default Spinner;