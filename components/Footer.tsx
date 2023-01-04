import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/Footer.module.css';
import { FaInstagram, FaTiktok, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
            <Image
              src="/images/msa-logo.jpg"
              width={200}
              height={200}
              alt="msa-footer-logo"
            />
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
          </motion.div>
          <div className={styles.footer__content__bottom__right}>
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
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
