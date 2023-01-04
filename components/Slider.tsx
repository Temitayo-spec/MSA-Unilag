'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { SliderData } from './Data/SliderData';
import styles from './slider.module.css';

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const length = SliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  });

  if (!Array.isArray(SliderData) || SliderData.length <= 0) {
    return null;
  }

  return (
    <div>
      <div className={styles.slider}>
        {SliderData.map((slide, index) => {
          return (
            <div
              key={index}
              className={`${
                index === current ? styles.slide : styles.slide__hidden
              } ${styles.zoom}`}
            >
              {index === current && (
                <Image
                  src={slide.image}
                  alt={slide.alt}
                  width={1000}
                  height={500}
                  priority={true}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
