import Image from 'next/image';
import React from 'react';
import styles from '../styles/Card.module.css';
import { BsArrowRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface Props {
  src: string;
  alt: string;
  title: string;
  description: string;
}

const Card = ({ src, alt, title, description }: Props) => {
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      className={styles.wrapper}
    >
      <motion.div className={styles.content}>
        <Image src={src} height={500} width={500} alt={alt} />
        <motion.div className={styles.texts}>
          <motion.h2 variants={textVariants}>{title}</motion.h2>
          <motion.p variants={textVariants}>{description}</motion.p>
          <Link href="/events/msa-events">
            <motion.button variants={textVariants} type="button">
              Learn More{' '}
              <span>
                <BsArrowRight className={styles.arrow} />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Card;
