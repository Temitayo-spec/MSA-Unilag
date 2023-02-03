import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import styles from '../../styles/ContactForm.module.css';
import Spinner from '../Spinner';

type Props = {
  values: {
    name: string;
    email: string;
    subject: string;
    message: string;
    loading: boolean;
  };
  setValues: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      subject: string;
      message: string;
      loading: boolean;
    }>
  >;
};

const ContactForm = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    loading: false,
  });
  const form = useRef() as React.MutableRefObject<HTMLFormElement>;

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setValues({ ...values, loading: true });

    emailjs
      .sendForm(
        'service_w4f8u28',
        'template_30nabip',
        form.current,
        'EWuEKQAQ7joA6C45N'
      )
      .then(
        (result) => {
          toast.success('Message sent successfully');
          form.current.reset();
          setValues({
            name: '',
            email: '',
            subject: '',
            message: '',
            loading: false,
          });
        },
        (error) => {
          setValues({ ...values, loading: false });
          toast.error('Message not sent');
        }
      );
  };
  return (
    <form ref={form} onSubmit={onSubmit} className={styles.form}>
      <h1>Send A Message</h1>
      <div className={styles.form__inputs__ctn}>
        <div className={styles.grid}>
          <div className={styles.form__group}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              value={values.name}
              onChange={(e) => setValues({ ...values, name: e.target.value })}
            />
          </div>
          <div className={styles.form__group}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
          </div>
        </div>
        <div className={styles.form__group}>
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={values.subject}
            onChange={(e) => setValues({ ...values, subject: e.target.value })}
          />
        </div>

        <div className={styles.form__group}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={values.message}
            onChange={(e) => setValues({ ...values, message: e.target.value })}
          />
        </div>
        <button
          className={
            values.name && values.email && values.subject && values.message
              ? styles.active
              : styles.inactive
          }
          disabled={
            values.name && values.email && values.subject && values.message
              ? false
              : true
          }
          type="submit"
        >
          Send Message <span>{values.loading ? <Spinner /> : ''}</span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
