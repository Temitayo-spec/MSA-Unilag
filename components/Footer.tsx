import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../styles/Footer.module.css';
import { FaArrowRight, FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Spinner from './Spinner';

const Footer = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 2,
      },
    },
  };

  const textVariants = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };

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
    <motion.footer className={styles.footer}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        className={styles.footer__content}
      >
        <motion.div className={styles.footer__content__top}>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className={styles.footer__content__top__left}
          >
            <motion.h2 variants={textVariants}>
              Management Students Association
            </motion.h2>
            <motion.p variants={textVariants}>MSA Office,</motion.p>
            <motion.p variants={textVariants}>
              Faculty of Management Sciences,
            </motion.p>
            <motion.p variants={textVariants}>University of Lagos</motion.p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className={styles.footer__content__top__middle}
          >
            <motion.h2 variants={textVariants}>Main Office</motion.h2>
            <motion.p variants={textVariants}>President</motion.p>
            <motion.p variants={textVariants}>+234 8152522529</motion.p>
            <motion.p variants={textVariants}>8:00am - 4:00pm</motion.p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className={styles.footer__content__top__right}
          >
            <motion.h2 variants={textVariants}>Information</motion.h2>
            <motion.p variants={textVariants}>General Enquires</motion.p>
            <motion.p variants={textVariants}>+234 8189749192</motion.p>
            <motion.p variants={textVariants}>msaunilag@outlook.com</motion.p>
          </motion.div>
        </motion.div>
        <div className={styles.footer__content__bottom}>
          <div className={styles.footer__content__bottom__left}>
            <div className={styles.logo__ctn}>
              <Link href="/" className={styles.logo__ctn}>
                <Image
                  src="/images/MSA_LOGO.png"
                  alt="msa-logo"
                  width={260}
                  height={260}
                />
              </Link>
              <div className={styles.logo__text}>
                <h6>Management students association</h6>
              </div>
            </div>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className={styles.footer__content__bottom__middle}
          >
            <Link href="/">Home</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/gallery">Gallery</Link>
            <Link href="/associations">Associations</Link>
            <Link href="/events">Events</Link>
            <Link href="/leadership">Leadership</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/do-something">Do Something</Link>
            <Link href="/pq_tutorial">PQs & Tutorial Questions</Link>
          </motion.div>
          <div className={styles.footer__content__bottom__middle__icons}>
            <Link href="">
              <FaTwitter />
            </Link>
            <Link href="">
              <FaTiktok />
            </Link>
            <Link href="">
              <FaInstagram />
            </Link>
          </div>
          <div className={styles.footer__content__bottom__right}>
            <h6>Subscribe to our newsletter</h6>
            <form ref={form} onSubmit={onSubmit}>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button disabled={email.length < 1} type="submit">
                Subscribe <span>{loading ? <Spinner /> : ''}</span>
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
