import React, { useState } from 'react';
import { BsNewspaper } from 'react-icons/bs';
import styles from '../../styles/NewsLetter.module.css';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Spinner from '../Spinner';

const NewsLetter = () => {
  const [toggleForm, setToggleForm] = useState(false);
    const form = React.useRef() as React.MutableRefObject<HTMLFormElement>;

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const onSubmit = (e: { preventDefault: () => void }) => {
      e.preventDefault();
      setLoading(true);

      emailjs
        .sendForm(
          'service_w4f8u28',
          'newsletter',
          form.current,
          'EWuEKQAQ7joA6C45N'
        )
        .then(
          (result) => {
            toast.success('Subscribed successfully');
            setLoading(false);
            form.current.reset();
            setEmail('');
          },
          (error) => {
            setLoading(false);
            toast.error('Subscription failed');
          }
        );
    };
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
        <form ref={form} onSubmit={onSubmit} className={styles.form}>
          <h2>Subscribe to our newsletter</h2>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className={styles.btn}
            disabled={email.length < 1}
            type="submit"
          >
            Subscribe <span>{loading ? <Spinner /> : ''}</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsLetter;
