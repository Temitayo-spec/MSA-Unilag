import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import Transition from '../../../components/Transition';
import styles from './page.module.css';

const Page = () => {
  const volunteer = gsap.timeline(),
    volunteerCtn = useRef(null);

  useEffect(() => {
    volunteer.to(
      volunteerCtn.current,
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
      <Transition timeline={volunteer} text="Volunteer" />
      <div className={styles.wrapper} ref={volunteerCtn}>
        <div className={styles.banner}>
          <h1>Volunteer</h1>
        </div>
      </div>
    </>
  );
};

export default Page;
