import React, { useEffect, useRef } from 'react';
import Transition from '../../../components/Transition';
import styles from './page.module.css';

const Page = () => {
  const join_pr = gsap.timeline();
  const join_prCtn = useRef(null);

  useEffect(() => {
    join_pr.to(
      join_prCtn.current,
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
      <Transition timeline={join_pr} text="Join PR" />
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <h1>Join PR</h1>
        </div>
      </div>
    </>
  );
};

export default Page;
