/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import Accordion from '../../../components/Executives/Accordion';
import styles from './page.module.css';
import Transition from '../../../components/Transition';
import { msaData } from '../../../components/Data/MsaData';
import TeamCard from '../../../components/TeamCard';

const Page = () => {
  // const [current, setCurrent] = useState(0);
  // const sliderData = [
  //   {
  //     bigText: 'MSA',
  //     smallText: 'Management Science Association',
  //   },
  //   {
  //     bigText: `The Zeniths'21`,
  //     smallText:
  //       'Integrity has always been our watch word and we are committed to delivering excellently on every promise.',
  //   },
  // ];

  const executives = gsap.timeline();
  const executivesCtn = useRef(null);

  useEffect(() => {
    executives.to(
      executivesCtn.current,
      {
        duration: 0.5,
        scaleY: 1,
        opacity: 1,
        ease: 'power3.out',
        transformOrigin: 'top',
      },
      '-=0.5'
    );
  }, []);

  // const length = sliderData.length;

  // const nextSlide = () => {
  //   setCurrent(current === length - 1 ? 0 : current + 1);
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 7000);
  //   return () => clearInterval(interval);
  // }, []);

  // if (!Array.isArray(sliderData) || sliderData.length <= 0) {
  //   return null;
  // }
  return (
    <>
      <Transition timeline={executives} text="MSA Executives" />
      <div className={styles.wrapper} ref={executivesCtn}>
        <div className={styles.banner}>
          {/* {sliderData.map((slide, index) => {
            return ( */}
          <div
            className={styles.slide}
            // key={index}
          >
            {/* {index === current && ( */}
            <div className={styles.bannerText}>
              <h1>MSA</h1>
              <p>Management Science Association</p>
            </div>
            {/* )} */}
          </div>
          {/* );
          })} */}
        </div>
        <main className={styles.main__content}>
          <header className={styles.header}>
            <h1>Our Team</h1>
            <p>ASISA EXECUTIVES 21/22 (THE SYNERGY)</p>
          </header>
          <div className={styles.team__container}>
            {msaData.map((data) => {
              return <TeamCard data={data} key={data.name} />;
            })}
          </div>
          <section className={styles.section__ctn}>
            <header className={styles.header}>
              <h1>Get to know your Officers</h1>
              <p>
                We quizzed your Student Officer Team on several issues. But we
                didn&apos;t just talk work... Select an Officer&apos;s name to
                find out about their hobbies, what they couldn&apos;t live
                without, and what superpower they want.
              </p>
            </header>
            <Accordion />
          </section>
        </main>
      </div>
    </>
  );
};

export default Page;
