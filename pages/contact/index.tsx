import { useEffect, useRef } from 'react';
import { CiLocationOn, CiMail, CiPhone } from 'react-icons/ci';
import styles from './page.module.css';
import gsap from 'gsap';
import Transition from '../../components/Transition';

const Page = () => {
  const contact = gsap.timeline(),
    contactCtn = useRef(null);

  useEffect(() => {
    contact.to(
      contactCtn.current,
      {
        duration: 0.5,
        scaleY: 1,
        opacity: 1,
        ease: 'power3.out',
        transformOrigin: 'top',
      },
      '-=0.5'
    );
  });

  return (
    <>
      <Transition timeline={contact} text="Contact Us" />
      <div className={styles.wrapper} ref={contactCtn}>
        <div className={styles.banner}>
          <h1>Contact Us</h1>
          <p>
            Wish to enquire about the association, Events, extra - curricular
            activities or anything else? You can walk in during office hours,
            give us a call or simply submit the form here.
          </p>
        </div>

        <div className={styles.send__message__ctn}>
          <div className={styles.lhs}>
            <div className={styles.info}>
              <CiPhone className={styles.icon} />
              <span>
                <b>Call Us 24x7</b> <br /> President: +234 8152522529
                <br /> Gen. Sec.: +234 8159749192
              </span>
            </div>
            <div className={styles.info}>
              <CiMail className={styles.icon} />
              <span>
                <b>Write Us</b>
                <br /> msaunilag@outlook.com
              </span>
            </div>
            <div className={styles.info}>
              <CiLocationOn className={styles.icon} />
              <span>
                <b>Main Office</b>
                <br /> MSA Office, Faculty of Management Sciences, University of
                Lagos.
              </span>
            </div>
          </div>

          <form action="#" className={styles.form}>
            <h1>Send A Message</h1>
            <div className={styles.form__inputs__ctn}>
              <div className={styles.grid}>
                <div className={styles.form__group}>
                  <label htmlFor="name">Name</label>
                  <input type="text" name="name" id="name" />
                </div>
                <div className={styles.form__group}>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" />
                </div>
              </div>
              <div className={styles.form__group}>
                <label htmlFor="email">Subject</label>
                <input type="text" name="text" id="subject" />
              </div>

              <div className={styles.form__group}>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" />
              </div>
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Page;
