import Image from 'next/image';
import React from 'react';
import styles from '../../styles/SectionFour.module.css';
import { motion } from 'framer-motion';

const SectionFour = () => {
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
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
      className={styles.wrapper}
    >
      <motion.div className={styles.lhs}>
        <motion.h2 variants={textVariants} className={styles.quote}>
          <span>&quot;</span>
          <i>
            I welcome you to the official website of our great Association. It will interest you to know that this is a major development in the faculty which allow students have a pure glimpse of what is and is to come in making sure that the welfarism of MSAITES is promoted. Our mission remains to ensure that a more conducive and enabling learning environment is available at all time. 

Alumni, individuals and corporate bodies are welcomed to support our noble cause us through donations and sponsorship, feel free kindly explore this website and let us know where you can come in.
          </i>
          <span>&quot;</span>
        </motion.h2>
        <motion.h3 variants={textVariants} className={styles.name}>
          Omolere Oluwafemi - MSA President
        </motion.h3>
      </motion.div>
      <motion.div variants={imageVariants} className={styles.image}>
        <Image
          src="/images/msa-president.jpg"
          width={400}
          height={400}
          alt="msa president"
        />
      </motion.div>
    </motion.div>
  );
};

export default SectionFour;
