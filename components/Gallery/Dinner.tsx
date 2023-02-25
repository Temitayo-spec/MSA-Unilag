import React, { useState } from 'react';
import styles from '../../pages/gallery/page.module.css';
import Image from 'next/image';
import { dinnerData } from '../../components/Data/GalleryData';

const Dinner = () => {
  const [viewAll, setViewAll] = useState<boolean>(false);

  return (
    <div className={styles.exco__gallery}>
      <h1>MSA Dinner & Award Night</h1>
      <p>
        “ The best way to predict the future is to create it. ” — Abraham
        Lincoln
      </p>
      <button onClick={() => setViewAll(!viewAll)} className={styles.btn}>
        {viewAll ? 'View Less' : 'View All'}
      </button>
      {viewAll ? (
        <div className={styles.gallery__ctn}>
          {dinnerData.map((item, index) => {
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

export default Dinner;
