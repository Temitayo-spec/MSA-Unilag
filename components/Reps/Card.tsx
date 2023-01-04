import React from 'react';
import styles from '../../pages/leadership/class-representatives/page.module.css';

interface Props {
  data: {
    name: string;
    department: string;
    contact: string;
  };
}

const Card = ({ data: { name, department, contact } }: Props) => {
  return (
    <div className={styles.card__ctn}>
      <h2>{name}</h2>
      <p>{department}</p>
      <p>{contact}</p>
    </div>
  );
};

export default Card;
