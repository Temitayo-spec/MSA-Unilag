'use client';
import { useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/SectionTwo.module.css';
import { motion } from 'framer-motion';
import Modal from '../Modal';

const SectonTwo = () => {
  const [modal, setModal] = useState<boolean>(false);
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const imageVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      duration: 1,
    },
  };
  return (
    <>
      {modal && <Modal setModal={setModal} />}
      <div className={styles.wrapper}>
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 1 }}
          className={styles.image__ctn}
        >
          <Image
            src="/images/begin_with_us.jpg"
            alt="begin with us"
            width={400}
            height={400}
          />
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 1 }}
          className={styles.content}
        >
          <motion.h1 variants={textVariants}>Learning Begins With Us</motion.h1>
          <hr />
          <motion.p variants={textVariants}>
            Management Students Association; we are an independent
            student-interest organization in the University of Lagos with the
            sole aim of promoting and supporting the welfarism of students of
            the Faculty of Management sciences for a better school life and the
            development of our society and the world at large.....
          </motion.p>
          <button
            onClick={() => {
              setModal(true);
            }}
            type="button"
          >
            Read More
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default SectonTwo;
