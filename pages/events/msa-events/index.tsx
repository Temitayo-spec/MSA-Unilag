import gsap from 'gsap';
import Image from 'next/image';
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
            <div className={styles.lhs}>
              <Image
                src="/images/MSA-career-expo/expo-5.jpg"
                alt="MSA Events"
                width={300}
                height={300}
              />
            </div>
            <div className={styles.rhs}>
              <Link href="/gallery">MSA Career Expo</Link>
              <p>
                Career Expo is an annual conference organized by th Management
                Students&apos; Association, a student body established with the
                aim of providing academic and career support to its 5000
                students in the Faculty of Management Sciences, University of
                Lagos, by creating platforms for value transmission and personal
                development, thereby promotiong youth employability and
                sustainability. This conference for which is in its 7th year, is
                aimed at creating a platform for its students to interact with
                Industry experts, and also prepare its students for the future
                ahead. Over the years, career expo has witnessed seasoned
                speakers, industry experts, distinguised alumni across various
                field, come grace this occasion.
              </p>
              <Link className={styles.link} href="/gallery">
                <p>
                  Go to <span>Gallery</span>
                </p>
              </Link>
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.lhs}>
              <Image
                src="/images/MSA-studentpreneurship/studentpreneur-10.jpg"
                alt="MSA Events"
                width={300}
                height={300}
              />
            </div>
            <div className={styles.rhs}>
              <Link href="/gallery">
                MSA Annual Entrpreneurship & Innovation Challenge
              </Link>
              <p>
                The MSA Annual Entrpreneurship & Innovation Challenge is an
                annual event that brings together students and employers from
                across the country. The event is a great opportunity for
                students to meet with employers and learn about the various
                career opportunities available to them.
              </p>
              <Link className={styles.link} href="/gallery">
                <p>
                  Go to <span>Gallery</span>
                </p>
              </Link>
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.lhs}>
              <Image
                src="/images/community-service.jpg"
                alt="MSA FACULTY WEEK"
                width={350}
                height={350}
              />
            </div>
            <div className={styles.rhs}>
              <Link href="#">MSA & Jobberman Soft Skill Training</Link>
              <p>
                The MSA & Jobberman Soft Skill Training is an annual event that
                brings together students and employers from across the country.
                The event is a great opportunity for students to meet with
                employers and learn about the various career opportunities
                available to them.
              </p>
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.lhs}>
              <Image
                src="/images/MSA-award-night/dsc-4.jpg"
                alt="MSA Events"
                width={350}
                height={350}
              />
            </div>
            <div className={styles.rhs}>
              <Link href="/gallery">MSA AWARDS & GALA NIGHT</Link>
              <p>
                As a reward for academic, social, entrepreneurial, and
                innovative prowess, prime amongst the events organized by MSA is
                the Annual Awards and Gala event. The awards night is aimed at
                lauding the virtues of excellence for students, staffs, alumni,
                donors, and corporate organizations who have contributed
                exceptionally towards the goals of MSA by Educating, Engaging,
                Empowering and Exposing our students to a wonderful and positive
                experience in and out of the classroom.
              </p>
              <Link className={styles.link} href="/gallery">
                <p>
                  Go to <span>Gallery</span>
                </p>
              </Link>
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.lhs}>
              <Image
                src="/images/MSA-fest/msa-fest-4.jpg"
                alt="MSA Events"
                width={350}
                height={350}
              />
            </div>
            <div className={styles.rhs}>
              <Link href="/gallery">MSA Fest 2.0</Link>
              <p>
                MSA Fest is a social festival-setting event organized annually
                to create an avenue for students to socialize, make and meet
                friends in a pleasurable environment while freely enjoying the
                best of music, food, dance, games, and casual recreational
                activities. And based on the timing of the event, MSA Fest
                serves as a means of welcoming freshmen to the University of
                Lagos and Staylites to a new session/semester. MSA Fest is an
                extremely popular and desirable event in the Unilag community
                that attracts the best and most vibrant youthful audience.As a
                result, MSA Fest have established a place in the “typical”
                unilag campus experience.
              </p>
              <Link className={styles.link} href="/gallery">
                <p>
                  Go to <span>Gallery</span>
                </p>
              </Link>
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.lhs}>
              <Image
                src="/images/deans-cup.jpg"
                alt="MSA Deans Cup"
                width={350}
                height={350}
              />
            </div>
            <div className={styles.rhs}>
              <Link href="/gallery">MSA DEAN&apos;S CUP</Link>
              <p>
                MSA Dean’s Cup is an annual sports festival which is a
                socio-sporting event organized to strike a balance between
                sporting activities and academics in the Faculty of Management
                Sciences. Over the years, it is an extra-curricular aimed
                towards bonding and networking among students of the faculty
                through sport which not only cultivate the spirit of
                sportsmanship amongst students of various departments of this
                great faculty but will also help in the promotion of healthy
                rivalry amongst students in the faculty. And as such, has become
                a breeding ground for the discovery and horning of raw athletic
                talent and prowess
              </p>
              <Link className={styles.link} href="/gallery">
                <p>
                  Go to <span>Gallery</span>
                </p>
              </Link>
            </div>
          </li>
          <li className={styles.listItem}>
            <div className={styles.lhs}>
              <Image
                src="/images/community-service.jpg"
                alt="MSA FACULTY WEEK"
                width={350}
                height={350}
              />
            </div>
            <div className={styles.rhs}>
              <Link href="/gallery">MSA FACULTY WEEK 2023</Link>
              <p>
                MSA Faculty Week is a program of social expository, academic and
                cultural activities organized annually to develop students of
                the faculty of management science and other students of the
                university in every phase of their lives. The weeklong program
                is also aimed at creating an avenue for students to develop
                essential extra-curricular skills and knowledge needed to
                function best in the society, make and meet friends in a
                pleasurable environment while freely enjoying the best of social
                activities.
              </p>
              <p style={{
                marginTop: '1rem',
              }}>
                MSA Faculty Week has become a long-standing social event with a
                tradition of excellence held consecutively for the past 30
                years. It is an extremely popular event and one of the most
                anticipated annual event in the management students’ community
                that naturally brings out the creative and vibrant side of
                students who passionately engage in all the lined up
                activities for the week.
              </p>
              <Link className={styles.link} href="/gallery">
                <p>
                  Go to <span>Gallery</span>
                </p>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Page;
