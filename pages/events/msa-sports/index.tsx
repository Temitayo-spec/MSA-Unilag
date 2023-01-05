import gsap from 'gsap';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import Transition from '../../../components/Transition';
import styles from './page.module.css';

const Page = () => {
  const msaSports = gsap.timeline(),
    msaSportsCtn = useRef(null);

  useEffect(() => {
    msaSports.to(
      msaSportsCtn.current,
      {
        duration: 0.5,
        scaleY: 1,
        opacity: 1,
        ease: 'power3.out',
        transformOrigin: 'top',
      },
      '-=0.5'
    );
  });

  return (
    <>
      <Transition timeline={msaSports} text="MSA Sports" />
      <div className={styles.wrapper} ref={msaSportsCtn}>
        <div className={styles.banner}>
          <h1>Sport in MSA</h1>
        </div>

        <div className={styles.content}>
          <Link href="/gallery">Deans Cup</Link>
          <Link href="/gallery">Fresher&apos;s Cup</Link>
          <Link href="/gallery">MSA Athletes at NUGA</Link>
        </div>
      </div>
    </>
  );
};

export default Page;
