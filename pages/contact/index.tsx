import { useEffect, useRef, useState } from 'react';
import { CiLocationOn, CiMail, CiPhone } from 'react-icons/ci';
import styles from './page.module.css';
import gsap from 'gsap';
import Transition from '../../components/Transition';
import LargeSpinner from '../../components/LargeSpinner';
import ContactForm from '../../components/Contact/ContactForm';

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
            Want to enquire about the association, Events, extra - curricular
            activities or anything else? You can walk in during office hours,
            give us a call or simply submit the form here.
          </p>
        </div>

        <div className={styles.send__message__ctn}>
          <div className={styles.lhs}>
            <div className={styles.info}>
              <CiPhone className={styles.icon} />
              <span>
                <b>Call Us</b> <br /> President: +234 8152522529
                <br /> Gen. Sec.: +234 8159749192
              </span>
            </div>
            <div className={styles.info}>
              <CiMail className={styles.icon} />
              <span>
                <b>Write Us</b>
                <br /> msaunilag@gmail.com
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

          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default Page;
