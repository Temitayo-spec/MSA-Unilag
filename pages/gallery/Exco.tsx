'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { excoData } from '../../components/GalleryData';
import styles from './page.module.css';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';

const Exco = () => {
  const [selectedId, setSelectedId] = useState<string>('');

  return (
    <div className={styles.exco__gallery}>
      <h1>MSA Excos Inauguration Day</h1>
      <p>
        “Leadership is the capacity to translate vision into reality.” —Warren
        Bennis
      </p>
      <div className={styles.gallery__ctn}>
        {excoData.map((item, index) => {
          return (
            <div className={styles.gallery__img} key={index}>
              <motion.div
                layoutId={item.src}
                onClick={() => setSelectedId(item.src)}
              >
                <Image src={item.src} alt="images" height={500} width={400} />
              </motion.div>
            </div>
          );
        })}
      </div>
      <AnimatePresence>
        {selectedId && (
          <motion.div
            className={`${styles.preview} ${
              selectedId ? styles.preview__active : ''
            }`}
            layoutId={selectedId}
          >
            <Image src={selectedId} alt="images" height={500} width={400} />
            <motion.button
              className={styles.cancel__btn}
              onClick={() => setSelectedId('')}
            >
              <FaTimes className={styles.icon} />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Exco;
