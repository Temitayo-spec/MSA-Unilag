import React, { useEffect, useRef } from 'react';
import styles from '../styles/Transition.module.css';
import { Power3 } from 'gsap';

interface Props {
  timeline: gsap.core.Timeline;
  text: string;
}

const Transition = ({ timeline, text }: Props) => {
  const trans = useRef(null);
  useEffect(() => {
    timeline
      .to(
        trans.current,
        {
          duration: 0.8,
          scaleY: 1,
          ease: Power3.easeOut,
          transformOrigin: 'top',
        },
        '0'
      )
      .to(trans.current, {
        duration: 0.5,
        scaleY: 0,
        ease: Power3.easeOut,
        transformOrigin: 'bottom',
        delay: 1,
      });
  });
  return (
    <div className={styles.transition__wrapper} ref={trans}>
      <div className={styles.transition__inner}>{text}</div>
    </div>
  );
};

export default Transition;
