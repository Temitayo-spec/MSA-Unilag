import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import Transition from '../../components/Transition';
import styles from './page.module.css';

const Page = () => {
  const pq_tutorial = gsap.timeline(),
    pq_tutorialCtn = useRef(null);

  useEffect(() => {
    pq_tutorial.to(
      pq_tutorialCtn.current,
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
      <Transition timeline={pq_tutorial} text="PQs & Tutorials Questions" />
      <div className={styles.wrapper} ref={pq_tutorialCtn}>
        <header className={styles.banner}>
          <h1>PQs & Tutorials Questions</h1>
        </header>
        <div className={styles.content}>
          <div className={styles.link__group}>
            <h1>For Year 1</h1>
            <div className={styles.link__group__links}>
              <a href="#">
                Follow this link to the drive for Year 1 PQs and Tutorial
                Questions.
              </a>
            </div>
          </div>
          <div className={styles.link__group}>
            <h1>For Year 2</h1>
            <div className={styles.link__group__links}>
              <a href="#">
                Follow this link to the drive for Year 2 PQs and Tutorial
                Questions.
              </a>
            </div>
          </div>
          <div className={styles.link__group}>
            <h1>For Year 3</h1>
            <div className={styles.link__group__links}>
              <a href="#">
                Follow this link to the drive for Year 3 PQs and Tutorial
                Questions.
              </a>
            </div>
          </div>
          <div className={styles.link__group}>
            <h1>For Year 4</h1>
            <div className={styles.link__group__links}>
              <a href="#">
                Follow this link to the drive for Year 4 PQs and Tutorial
                Questions.
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
