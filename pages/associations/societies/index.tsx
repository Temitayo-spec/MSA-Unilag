import gsap from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import Transition from '../../../components/Transition';
import styles from './page.module.css';

const Page = () => {
  const society = gsap.timeline(),
    societyCtn = useRef(null);

  useEffect(() => {
    society.to(
      societyCtn.current,
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
      <Transition timeline={society} text="Societies" />
      <div className={styles.wrapper} ref={societyCtn}>
        <div className={styles.banner}>
          <h1>Societies</h1>
        </div>

        <main className={styles.content}>
          <div className={styles.society__card}>
            <div className={styles.society__card__img}>
              <Image
                src="/images/society/investment-society.jpeg"
                alt="Society"
                width={200}
                height={200}
              />
              <h2>Investment Society</h2>
            </div>
            <div className={styles.society__card__content}>
              <p>
                The Investment Society is a multidisciplinary and diverse
                society set-up in May 2016 to serve as a bridge between theory
                and professional practice in the finance, investment banking,
                securities, management consulting and alternative investment.
                The society sources intelligent, driven and passionate members
                from all faculties in the University of Lagos who then undergo a
                series of intellectually challenging and stimulating training
                sessions aimed at training them to become seasoned analysts with
                testable knowledge of the mechanics of the professional
                environment. TIS seeks to educate members about finance,
                economics and investments, while also providing opportunities to
                network with some of the world’s most prestigious firms. The
                Society exposes her members to skills, career workshops, stock
                pitches and business case competitions. TIS organizes one of the
                university&apos;s largest educative conference called THE
                COLLOQUIM, which brings industry experts from all fields into
                having meaningful and beneficial interactive sessions
                with the students.
              </p>
            </div>
          </div>
          <div className={styles.society__card}>
            <div className={styles.society__card__img}>
              <Image
                src="/images/society/actuarial-club.jpg"
                alt="Society"
                width={200}
                height={200}
              />
              <h2>Actuarial Club</h2>
            </div>
            <div className={styles.society__card__content}>
              <p>
                Actuarial club, Unilag is a student organization that supports
                students in their academic endeavours and promotes the field of
                actuarial science. The club organizes events such as tutorials,
                soft skills training, student orientation and career events with
                industry experts. The goal of the club is to provide students
                with resources and opportunities to learn about the field and to
                prepare them for careers in actuarial science.
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Page;
