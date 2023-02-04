import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../../pages/gallery/page.module.css';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import { orientationData } from '../../components/Data/GalleryData';

const Orientation = () => {
  const [selectedId, setSelectedId] = useState<string>('');
  const [viewAll, setViewAll] = useState<boolean>(false);

  return (
    <div className={styles.exco__gallery}>
      <h1>MSA Orientation Day</h1>
      <p>
        “Orientation is the process of acclimatizing freshers to the new
        environment and the new culture of the university. It is a process of
        familiarizing the freshers with the university and its environment.” —
        Dr. A. K. Singh
      </p>

      <button onClick={() => setViewAll(!viewAll)} className={styles.btn}>
        {viewAll ? 'View Less' : 'View All'}
      </button>
      {viewAll ? (
        <div className={styles.gallery__ctn}>
          {orientationData.map((item, index) => {
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
      ) : (
        ''
      )}
      {/* <AnimatePresence>
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
      </AnimatePresence> */}
    </div>
  );
};

export default Orientation;
