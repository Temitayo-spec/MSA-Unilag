import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../../pages/gallery/page.module.css';
import Image from 'next/image';
import { FaTimes } from 'react-icons/fa';
import { studentpreneurData } from '../../components/Data/GalleryData';

const Studentpreneur = () => {
  const [selectedId, setSelectedId] = useState<string>('');
  const [viewAll, setViewAll] = useState<boolean>(false);


  return (
    <div className={styles.exco__gallery}>
      <h1>Studentpreneurship Challenge Program</h1>
      <p>
        “Studenpreneurship is the process of developing a business idea and a
        business plan, and then launching a business while still in school.” —
        Dr. A. K. Singh
      </p>
      <button onClick={() => setViewAll(!viewAll)} className={styles.btn}>
        {viewAll ? 'View Less' : 'View All'}
      </button>
      {viewAll ? (
        <div className={styles.gallery__ctn}>
          {studentpreneurData.map((item, index) => {
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

export default Studentpreneur;
