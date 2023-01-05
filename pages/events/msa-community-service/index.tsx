import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import Transition from '../../../components/Transition';
import styles from './page.module.css';

const Page = () => {
  const community = gsap.timeline(),
    communityCtn = useRef(null);

  useEffect(() => {
    community.to(
      communityCtn.current,
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
      <Transition timeline={community} text="MSA Community" />
      <div className={styles.wrapper} ref={communityCtn}>
        <div className={styles.banner}>
          <h1>MSA Community Service</h1>
        </div>
      </div>
    </>
  );
};

export default Page;
