import React, { useState } from 'react';
import styles from '../../pages/gallery/page.module.css';
import Image from 'next/image';
import { festData } from '../../components/Data/GalleryData';

const Fest = () => {
  const [viewAll, setViewAll] = useState<boolean>(false);

  return (
    <div className={styles.exco__gallery}>
      <h1>MSA Fest.</h1>
      <p>“Live life, have Fun.” — Benita Eseagwu.</p>
      <button onClick={() => setViewAll(!viewAll)} className={styles.btn}>
        {viewAll ? 'View Less' : 'View All'}
      </button>
      {viewAll ? (
        <div className={styles.gallery__ctn}>
          {festData.map((item, index) => {
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
    </div>
  );
};

export default Fest;
