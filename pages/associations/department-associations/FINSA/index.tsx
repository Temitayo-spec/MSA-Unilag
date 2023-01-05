import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from './page.module.css';
import Transition from '../../../../components/Transition';
import { finsaData } from '../../../../components/Data/FinsaData';
import TeamCard from '../../../../components/TeamCard';

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
      <Transition timeline={associations} text="FINSA" />
      <div className={styles.wrapper} ref={associationsCtn}>
        <div className={styles.banner}>
          <div className={styles.bannerText}>
            <h1>FINSA</h1>
            <p>Finance Students Association</p>
          </div>
        </div>
        <main className={styles.main__content}>
          <header className={styles.header}>
            <h1>Our Team</h1>
            <p>FINSA EXECUTIVES 21/22 (THE SYNERGY)</p>
          </header>
          <TeamCard
            data={{
              src: '/images/finsa/Finsa-president.jpeg',
              name: 'Osuji Tobechukwu',
              position: 'President',
            }}
          />
          <div className={styles.team__container}>
            {finsaData.map((data) => {
              return <TeamCard data={data} key={data.name} />;
            })}
          </div>
        </main>
      </div>
    </>
  );
};

export default Page;
