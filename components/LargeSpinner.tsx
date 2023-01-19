import styles from '../styles/LargeSpinner.module.css';

const LargeSpinner = () => {
  return (
    <div className={styles.loader__wrapper}>
      <div className={styles.lds__ripple}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LargeSpinner;
