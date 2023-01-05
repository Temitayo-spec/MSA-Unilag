import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import Transition from '../../../components/Transition';
import styles from './page.module.css';

const Page = () => {
  const msaTutorials = gsap.timeline(),
    msaTutorialsCtn = useRef(null);

  useEffect(() => {
    msaTutorials.to(
      msaTutorialsCtn.current,
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
      <Transition timeline={msaTutorials} text="MSA Tutorials" />
      <div className={styles.wrapper} ref={msaTutorialsCtn}>
        <div className={styles.banner}>
          <h1>MSA Tutorials</h1>
        </div>
      </div>
    </>
  );
};

export default Page;
