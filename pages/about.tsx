import { useEffect, useRef } from 'react';
import Image from 'next/image';
import React from 'react';
import styles from '../styles/About.module.css';
import gsap from 'gsap';
import Accordion from '../components/Accordion';
import Transition from '../components/Transition';

const Page = () => {
  const about = gsap.timeline();
  const aboutCtn = useRef(null);

  useEffect(() => {
    about.to(
      aboutCtn.current,
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
      <Transition timeline={about} text="About" />
      <div className={styles.wrapper} ref={aboutCtn}>
        <div className={styles.banner}>
          <div className={styles.banner__text}>
            <h1>Who We Are?</h1>
          </div>
        </div>
        <section className={styles.section__a}>
          <div className={styles.lhs}>
            <h1>
              Management <br /> Students <br /> Association
            </h1>
            <hr />
          </div>
          <div className={styles.rhs}>
            <p>
              We continuously strive to be the best students association on
              campus, Management Students association remains committed to
              providing as much co-curricular and extra-curricular activities
              and events to help students cope with an academically rigorous
              education so our students can walk out of school ready for lives
              of leadership and service to their community. From Accounting to
              Actuarial Science and Insurance,to Business
              Administration,Finance,Employee Relations and people management,
              Management students Association is filled with activities that are
              both enriching and fun.
              <br />
              <br />
              We strive to be committed to the students we are privileged to
              serve, our various member associations,and our dedicated, talented
              faculty staff. We also take pride in having the most active and
              helpful group of partners, visionary parents, well-wishers, alumni
              and friends.
            </p>
          </div>
        </section>
        <section className={styles.section__b}>
          <div className={styles.inner}>
            <div className={styles.quote}>
              <Image
                src="/images/msa-president.jpg"
                width={400}
                height={500}
                alt="msa-president"
              />
              <div className={styles.quote__text}>
                <p>
                  <span>“</span>
                  <i>
                    Everyday at the Management Student Association is like a
                    blessing with the active students and talented Excos around.
                  </i>
                  <span>”</span>
                </p>

                <h3>Omolere Oluwafemi - President</h3>
              </div>
            </div>

            <div className={styles.our__mission}>
              <div className={styles.lhs}>
                <h1>Our Mission</h1>
                <hr />
                <p>
                  Our mission at Management Students Association is to develop
                  the unique abilities and potential of each student by offering
                  an enriched array of educational programs events and
                  activities. We strive for excellence through a hands-on
                  approach. Rich traditions rooted in our innovative approach to
                  grow productive, caring, and intellectually curious graduates.
                </p>
              </div>
              <div className={styles.rhs}>
                <Image
                  src="/images/orientation/orientation-8.jpg"
                  width={400}
                  height={500}
                  alt="mission"
                />
              </div>
            </div>

            <div className={styles.values}>
              <div className={styles.our__philosophy}>
                <h2>Our Philosophy</h2>
                <hr />
                <p>
                  We, at the Management Students Association, follow a
                  student-centered educational approach when designing our
                  activities. We make sure that it is based on scientific
                  observations from inception to execution. We believe that a
                  student is naturally curious and is capable of initiating
                  learning in a supportive and thoughtfully prepared
                  environment.
                </p>
              </div>
              <div className={styles.core__values}>
                <h2>Our Core Values</h2>
                <hr />
                <p>
                  We have a culture that is modern, relevant, and inspiring to
                  students in our faculty so they can have a brighter future. We
                  are determined in our approach to learning, are creative in
                  our thought process, and bold in our ambitions and achievement
                  of our goals.
                </p>
              </div>
            </div>
          </div>
        </section>
        <Accordion />
      </div>
    </>
  );
};

export default Page;
