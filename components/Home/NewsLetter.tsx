import { useState } from 'react';
import { BsNewspaper } from 'react-icons/bs';
import styles from '../../styles/NewsLetter.module.css';

const NewsLetter = () => {
  const [toggleForm, setToggleForm] = useState(false);
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner} onClick={() => setToggleForm(!toggleForm)}>
        <BsNewspaper className={styles.icon} />
      </div>
      <div
        className={`${styles.form__ctn} ${
          toggleForm ? styles.form__ctn__active : ''
        }`}
      >
        <form className={styles.form}>
          <h2>Subscribe to our Newsletter</h2>
          <input type="email" placeholder="Enter your email" />
          <button className={styles.btn} type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
