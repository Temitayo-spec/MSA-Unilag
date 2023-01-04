import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styles from '../styles/Accordion.module.css'

const Accordion = () => {
  const accordionData = [
    {
      title: 'Section 1',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, harum aspernatur. Consequuntur dolore voluptatum natus consequatur.',
    },
    {
      title: 'Section 2',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, harum aspernatur. Consequuntur dolore voluptatum natus consequatur.',
    },
    {
      title: 'Section 3',
      content:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis, harum aspernatur. Consequuntur dolore voluptatum natus consequatur.',
    },
  ];

  const [active, setActive] = useState(0);
  return (
    <div className={styles.wrapper}>
      <header>
        <h1>Frequently Asked Questions</h1>
      </header>
      <div className={styles.accordion}>
        {accordionData.map((item, index) => (
          <div className={styles.accordion__item} key={index}>
            <button
              type="button"
              onClick={() => {
                const panel = document.getElementsByClassName(
                  styles.panel
                ) as any;
                if (panel[index]?.style.maxHeight) {
                  panel[index].style.maxHeight = null;
                  setActive(-1);
                } else {
                  panel[index].style.maxHeight =
                    panel[index].scrollHeight + 'px';
                  setActive(index);
                }
              }}
              className={active === index ? styles.active : ''}
            >
              <span>{item.title}</span>
              <FaChevronDown className={styles.icon} />
            </button>
            <div className={styles.panel}>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
