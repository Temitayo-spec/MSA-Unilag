import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/SectionSix.module.css';

const SectionSix = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        {/* <Image
          src="/images/msa/msa-banner-clear-2.jpg"
          width={1000}
          height={1000}
          alt="faculty officers"
          priority={true}
        /> */}
        <div className={styles.content__text}>
          <h1>
            MEET YOUR <br /> FACULTY <br /> LEADERS<span>.</span>
          </h1>
          <Link href="/leadership/msa-executives">
            <button type="button">Leadership</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;
