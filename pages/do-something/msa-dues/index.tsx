import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import Transition from '../../../components/Transition';
import styles from './page.module.css';

const Page = () => {
  const dues = gsap.timeline(),
    duesCtn = useRef(null);

  useEffect(() => {
    dues.to(
      duesCtn.current,
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
      <Transition timeline={dues} text="MSA Dues" />
      <div className={styles.wrapper} ref={duesCtn}>
        <div className={styles.banner}>
          <h1>MSA Dues</h1>
          <p>
            Students can pay their faculty student Association dues to the MSA
            OFFICE and make payments to the Treasurer.
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
