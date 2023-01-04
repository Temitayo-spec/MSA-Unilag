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
      viewport={{ once: false, amount: 1 }}
      className={styles.wrapper}
    >
      <motion.div className={styles.lhs}>
        <motion.h2 variants={textVariants} className={styles.quote}>
          <span>&quot;</span>
          <i>
            The management Students organization is a non-profit org that is
            saddled with the responsibility of catering for the total welfarism
            of her members. The association is made of up other departmental
            associations namely: Asisa, BSA, Ermsa, Finsa, Nuasa.
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
