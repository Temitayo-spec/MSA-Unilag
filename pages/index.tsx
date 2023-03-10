import { useEffect, useRef } from 'react';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import gsap from 'gsap';
import { motion } from 'framer-motion';
import Transition from '../components/Transition';
import Slider from '../components/Slider';
import {
  SectionFive,
  SectionFour,
  SectionSix,
  SectionThree,
  SectionTwo,
} from '../components/Home';
import NewsLetter from '../components/Home/NewsLetter';
import Modal from '../components/Modal';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalAtom } from '../atom/modalAtom';

export default function Home() {
  const [modal, setModal] = useRecoilState(modalAtom);
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
  }, []);

  return (
    <>
      {modal.isOpen && <Modal setModal={setModal} />}
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
                We have a culture that is modern, relevant, and inspiring to
                students in our faculty so they can have a brighter future. We
                are determined in our approach to learning, are creative in our
                thought process, and bold in our ambitions and achievement of
                our goals.
              </motion.p>
              <Link href="/about">
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
