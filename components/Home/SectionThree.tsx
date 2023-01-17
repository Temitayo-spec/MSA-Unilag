'use client';
import React from 'react';
import styles from '../../styles/SectionThree.module.css';
import { motion } from 'framer-motion';

const SectionThree = () => {
  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.2,
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

  const smallTextVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <div className={styles.wrapper}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 1 }}
        className={styles.lhs}
      >
        <motion.h2 variants={textVariants}>
          Management Students Association at a Glance
        </motion.h2>
        <hr />
        <motion.div className={styles.stats__ctn}>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 1 }}
            className={styles.stats}
          >
            <motion.h1 variants={textVariants}>4K+</motion.h1>
            <motion.p variants={smallTextVariants}>Students Members</motion.p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 1 }}
            className={styles.stats}
          >
            <motion.h1 variants={textVariants}>50+</motion.h1>
            <motion.p variants={smallTextVariants}>Executives</motion.p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 1 }}
            className={styles.stats}
          >
            <motion.h1 variants={textVariants}>40+</motion.h1>
            <motion.p variants={smallTextVariants}>
              Annual Events & Activities
            </motion.p>
          </motion.div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 1 }}
            className={styles.stats}
          >
            <motion.h1 variants={textVariants}>50+</motion.h1>
            <motion.p variants={smallTextVariants}>Corporate Partners</motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className={styles.video}>
        <video width="500" height="500" controls>
          <source src="/video/SOTA-PASSING-OUT.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default SectionThree;
