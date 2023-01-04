"use client";
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { facultyData } from '../../components/GalleryData';
import styles from './page.module.css';
import Image from 'next/image';
import { FaCross, FaTimes } from 'react-icons/fa';


const Faculty = () => {
  const [selectedId, setSelectedId] = useState<string>('');

  return (
    <div className={styles.faculty__gallery}>
      <h1>Faculty of Management Sciences</h1>
      <p>“Everything has beauty, but not everyone sees it.” - Confucius</p>
      <div className={styles.gallery__ctn}>
        {facultyData.map((item, index) => {
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
}

export default Faculty