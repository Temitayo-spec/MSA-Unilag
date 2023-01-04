import Link from 'next/link';
import React from 'react';
import styles from './page.module.css';

const page = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.banner}>
        <h1>Sport in MSA</h1>
      </div>

      <div className={styles.content}>
        <Link href="/gallery">Deans Cup</Link>
        <Link href="/gallery">Fresher&apos;s Cup</Link>
        <Link href="/gallery">MSA Athletes at NUGA</Link>
      </div>
    </div>
  );
};

export default page;
