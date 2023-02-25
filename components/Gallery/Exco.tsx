import React, { useState } from 'react';
import styles from '../../pages/gallery/page.module.css';
import Image from 'next/image';
import { excoData } from '../../components/Data/GalleryData';

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
              <Image src={item.src} alt="images" height={500} width={400} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Exco;
