import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import styles from '../styles/Preloader.module.css';
import Image from 'next/image';

const Preloader = () => {
  const ref = useRef() as React.MutableRefObject<HTMLDivElement>;
  const percentRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const barRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const innerRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const textRef = useRef() as React.MutableRefObject<HTMLHeadingElement>;
  const headingRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const imageRef = useRef() as React.MutableRefObject<HTMLImageElement>;

  useEffect(() => {
    // calling gsap properly to avoid illegal invocation error with the gsap.to() method

    const tl = gsap.timeline({ defaults: { duration: 1 } });
    tl.fromTo(
      percentRef.current,
      { opacity: 1, zIndex: 1, duration: 2 },
      {
        opacity: 0,
        zIndex: -1,
        duration: 2,
      }
    );
    tl.to(barRef.current, {
      opacity: 0,
      zIndex: -1,
    });
    tl.to(innerRef.current, {
      width: '0%',
    });
    tl.from(
      headingRef.current,
      {
        y: '0%',
      },
      '-=0.5'
    );
    tl.fromTo(
      imageRef.current,
      { opacity: 0, x: '-100%' },
      {
        opacity: 1,
        x: '0%',
        duration: 1,
      },
      '-=1'
    );
    tl.to(textRef.current, {
      opacity: 1,
      textShadow: '0px 0px 20px #000',
      y: '10%',
      stagger: {
        amount: 0.4,
      },
      delay: 0.5, // delay the animation by 2 seconds
    });

    // a setInterval function that will run the frame function every 10 milliseconds
    const interval = setInterval(frame, 10);
    function frame() {
      if (percentRef.current.innerHTML === '100%') {
        clearInterval(interval);
      } else {
        console.log(percentRef.current.innerHTML);
        percentRef.current.innerHTML =
          parseInt(percentRef.current.innerHTML) + 1 + '%';
        ref.current.style.width = parseInt(percentRef.current.innerHTML) + '%';
      }
    }

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.preloader}>
      <div ref={innerRef} className={styles.preloader__inner}>
        <div ref={percentRef} className={styles.percent}>
          1%
        </div>
        <div ref={barRef} className={styles.bar}>
          <div ref={ref} className={styles.bar__confirm}></div>
        </div>
      </div>
      <div ref={headingRef} className={styles.heading}>
        <Image
          ref={imageRef}
          src="/images/msa-logo.jpg"
          width={200}
          height={200}
          alt="msa-logo"
        />
        <h1 ref={textRef}>
          Management <br /> Students <br /> Association
        </h1>
      </div>
    </div>
  );
};

export default Preloader;
