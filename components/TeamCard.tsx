import Image from 'next/image';
import React from 'react';
import styles from '../styles/TeamCard.module.css';

interface Props {
  data: {
    src: string;
    name: string;
    position: string;
    department?: string;
    year?: string;
    contact?: string;
  };
}

const TeamCard = ({
  data: { src, name, position, contact, department, year },
}: Props) => {
  return (
    <div className={styles.team__member}>
      <Image src={src} alt={name} width={400} height={500} />
      <h3>{name}</h3>
      <p>{position}</p>
      <p>{department}</p>
      <p>{year}</p>
      <p>{contact}</p>
    </div>
  );
};

export default TeamCard;
