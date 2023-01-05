import { useEffect, useRef } from 'react';
import styles from './page.module.css';
import gsap from 'gsap';
import Transition from '../../components/Transition';
import { Career, Dinner, Exco, Faculty, Orientation, Studentpreneur } from '../../components/Gallery';

const Page = () => {
  const gallery = gsap.timeline();
  const galleryCtn = useRef(null);

  useEffect(() => {
    gallery.to(
      galleryCtn.current,
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
      <Transition timeline={gallery} text="Gallery" />
      <div className={styles.wrapper} ref={galleryCtn}>
        <div className={styles.inner}>
          <header className={styles.header}>
            <h1>Gallery</h1>
          </header>

          <div className={styles.content}>
            <Orientation />
            <Career />
            <Studentpreneur />
            <Dinner />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
