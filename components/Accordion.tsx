import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styles from '../styles/Accordion.module.css';

const Accordion = () => {
  const accordionData = [
    {
      title: 'What’s the full meaning of MSA?',
      content: 'Management Sciences Students Association',
    },
    {
      title: 'Where’s the MSA office?',
      content:
        'At the right corner of the building after the old faculty building, opposite room 4&5.',
    },
    {
      title: 'Are there departmental students association and how do I join?',
      content:
        'Yes, there are, NUASA (Nigerian Universities Accounting Students Association), BSA( Business students Association) ERHRMSA (Employment and Human relations Management students Association), FINSA( finance students association ), ASISA(Actuarial Sciences & Insurance students association), and you can join when you’re only in Year3 or Year4',
    },
    {
      title: 'How many departments are in the faculty?',
      content:
        'We have 6 departments they include : Accounting, finance,business administration,actuarial sciences, insurance and employment and Human Resources.',
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
