import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import Transition from '../../../components/Transition';
import styles from './page.module.css';

const Page = () => {
  const donations = gsap.timeline(),
    donationsCtn = useRef(null);

  useEffect(() => {
    donations.to(
      donationsCtn.current,
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
      <Transition timeline={donations} text="Donations" />
      <div className={styles.wrapper} ref={donationsCtn}>
        <div className={styles.banner}>
          <h1>Donations</h1>
        </div>
      </div>
    </>
  );
};

export default Page;
