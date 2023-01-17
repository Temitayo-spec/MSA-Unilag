import { useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import Transition from '../components/Transition';
import Slider from '../components/Slider';
import { SectionFive, SectionFour, SectionSix, SectionThree, SectionTwo } from '../components/Home';
import NewsLetter from '../components/Home/NewsLetter';


export default function Home() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  const home = gsap.timeline();
  const homeCtn = useRef(null);

  useEffect(() => {
    home.to(
      homeCtn.current,
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
      <Transition timeline={home} text="Home" />
      <NewsLetter />
      <main ref={homeCtn} className={styles.main}>
        <section className={styles.section__a}>
          <motion.div className={styles.section__a__content}>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="visible"
              className={styles.main__content}
            >
              <motion.h1 variants={item}>
                Management <br /> Students <br /> Association
              </motion.h1>
              <motion.p variants={item}>
                This is where we teach students skills they need to transform
                themselves, others, and our global communities.
              </motion.p>
              <Link href="learn-more">
                <button>Learn More</button>
              </Link>
            </motion.div>
          </motion.div>
          <Slider />
        </section>
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
      </main>
    </>
  );
}
