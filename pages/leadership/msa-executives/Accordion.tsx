import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styles from './accordion.module.css';
import { officersData } from './OfficersData';

const Accordion = () => {
  const [active, setActive] = useState(0);
  return (
    <div className={styles.wrapper}>
      <div className={styles.accordion}>
        {officersData.map((item, index) => (
            <div className={`${styles.accordion__item} ${
                active === index ? styles.active : ''
          }`} key={index}>
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
              <span>{item.name}</span>
              <FaChevronDown className={styles.icon} />
            </button>
            <div className={styles.panel}>
              <div dangerouslySetInnerHTML={{ __html: item.details }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
