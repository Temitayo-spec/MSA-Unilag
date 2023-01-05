import gsap from 'gsap';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';
import Transition from '../../../components/Transition';
import styles from './page.module.css';

const Page = () => {
  const msaEvents = gsap.timeline(),
    msaEventsCtn = useRef(null);

  useEffect(() => {
    msaEvents.to(
      msaEventsCtn.current,
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
      <Transition timeline={msaEvents} text="MSA Events" />
      <div className={styles.wrapper} ref={msaEventsCtn}>
        <div className={styles.banner}>
          <h1>MSA Events</h1>
        </div>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Link href="/gallery">MSA Career Expo</Link>
            <p>
              The MSA Career Expo is an annual event that brings together
              students and employers from across the country. The event is a
              great opportunity for students to meet with employers and learn
              about the various career opportunities available to them. The
              event is also a great opportunity for employers to meet with
              students and learn about the various career opportunities
              available to them.
            </p>
          </li>
          <li className={styles.listItem}>
            <Link href="/gallery">
              MSA Annual Entrpreneurship & Innovation Challenge
            </Link>
            <p>
              The MSA Annual Entrpreneurship & Innovation Challenge is an annual
              event that brings together students and employers from across the
              country. The event is a great opportunity for students to meet
              with employers and learn about the various career opportunities
              available to them.
            </p>
          </li>
          <li className={styles.listItem}>
            <Link href="/gallery">MSA & Jobberman Soft Skill Training</Link>
            <p>
              The MSA & Jobberman Soft Skill Training is an annual event that
              brings together students and employers from across the country.
              The event is a great opportunity for students to meet with
              employers and learn about the various career opportunities
              available to them.
            </p>
          </li>
          <li className={styles.listItem}>
            <Link href="/gallery">
              MSA Alumni Award And Networking Dinner and MSA Annual Dinner &
              Award Night
            </Link>
            <p>
              The MSA Alumni Award And Networking Dinner and MSA Annual Dinner &
              Award Night is an annual event that brings together students and
              employers from across the country. The event is a great
              opportunity for students to meet with employers and learn about
              the various career opportunities available to them.
            </p>
          </li>
          <li className={styles.listItem}>
            <Link href="/gallery">MSA Fest</Link>
            <p>
              The MSA Fest is an annual event that brings together students and
              employers from across the country. The event is a great
              opportunity for students to meet with employers and learn about
              the various career opportunities available to them.
            </p>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Page;
