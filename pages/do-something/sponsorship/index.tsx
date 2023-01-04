import React, { useEffect, useRef } from 'react';
import Transition from '../../../components/Transition';
import styles from './page.module.css';

const Page = () => {
  const sponsorship = gsap.timeline(),
    sponsorshipCtn = useRef(null);

  useEffect(() => {
    sponsorship.to(
      sponsorshipCtn.current,
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
      <Transition timeline={sponsorship} text="Sponsorship" />
      <div className={styles.wrapper} ref={sponsorshipCtn}>
        <div className={styles.banner}>
          <h1>Sponsorship</h1>
        </div>
      </div>
    </>
  );
};

export default Page;
