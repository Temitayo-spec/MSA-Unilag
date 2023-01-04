import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/SectionSix.module.css';

const SectionSix = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <Image
          src="/images/faculty-officers.jpg"
          width={1000}
          height={1000}
          alt="faculty officers"
        />
        <div className={styles.content__text}>
          <h1>
            Meet Your <br /> Faculty <br /> Officers<span>.</span>
          </h1>
          <Link href="/leadership">
            <button type="button">Leadership</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
