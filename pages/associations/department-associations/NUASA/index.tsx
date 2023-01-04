import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { nuasaData } from '../../../../components/Data/NuasaData';
import TeamCard from '../../../../components/TeamCard';
import Transition from '../../../../components/Transition';
import styles from './page.module.css';

const Page = () => {
  const associations = gsap.timeline();
  const associationsCtn = useRef(null);

  useEffect(() => {
    associations.to(
      associationsCtn.current,
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
      <Transition timeline={associations} text="NUASA" />
      <div className={styles.wrapper} ref={associationsCtn}>
        <div className={styles.banner}>
          <div className={styles.bannerText}>
            <h1>NUASA</h1>
            <p>Nigerian Universities Accounting Students&apos; Association</p>
          </div>
        </div>
        <main className={styles.main__content}>
          <header className={styles.header}>
            <h1>Our Team</h1>
            <p>NUASA EXECUTIVES 21/22 (THE SYNERGY)</p>
          </header>
          <div className={styles.team__container}>
            {nuasaData.map((data) => {
              return <TeamCard data={data} key={data.name} />;
            })}
          </div>
        </main>
      </div>
    </>
  );
};

export default Page;
