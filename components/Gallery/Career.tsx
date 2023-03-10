import React, { useState } from 'react';
import styles from '../../pages/gallery/page.module.css';
import Image from 'next/image';
import { careerExpoData } from '../Data/GalleryData';

const Career = () => {
  const [selectedId, setSelectedId] = useState<string>('');
  const [viewAll, setViewAll] = useState<boolean>(false);

  return (
    <div className={styles.exco__gallery}>
      <h1>MSA Career Expo</h1>
      <p>
        “The best way to predict the future is to create it.” — Abraham Lincoln
      </p>
      <button onClick={() => setViewAll(!viewAll)} className={styles.btn}>
        {viewAll ? 'View Less' : 'View All'}
      </button>
      {viewAll ? (
        <div className={styles.gallery__ctn}>
          {careerExpoData.map((item, index) => {
            return (
              <div className={styles.gallery__img} key={index}>
                <Image src={item.src} alt="images" height={500} width={400} />
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

export default Career;
