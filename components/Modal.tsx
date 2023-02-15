import React from 'react';
import { SetterOrUpdater } from 'recoil';
import styles from '../styles/Modal.module.css';

type Props = {
  setModal: SetterOrUpdater<{ isOpen: boolean }>;
};

const Modal = ({ setModal }: Props) => {
  return (
    <div
      className={styles.wrapper}
      onClick={() => setModal((prev) => ({ ...prev, isOpen: false }))}
    >
      <div className={styles.inner} onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => setModal((prev) => ({ ...prev, isOpen: false }))}
        >
          X
        </button>
        <h1>Learning Begins With Us</h1>
        <p>
          Management Students Association; we are an independent
          student-interest organization in the University of Lagos with the sole
          aim of promoting and supporting the welfarism of students of the
          faculty management sciences for a better school-life and the
          development of our society and the world at large. Also, we provide
          our students with numerous opportunities to enjoy their university
          life with activities that brings out their inner talent. Our
          objectives are ensured through organization of seminars, tutorials,
          workshops, conferences, training, social/sport event and other
          capacity development programs.
        </p>
        <p>
          The association spans over 5000 members across various departments in
          the Faculty Of management science comprising Accounting, Actuarial
          Sciences, Business Administration, Employment Relation & Human
          Resource Management, Finance and Insurance.
        </p>
        <p>
          We pride ourselves on being the leading faculty students&apos;
          association in going all out to satisfy our students with the
          impactful engagements in the most fascinating fashion. We&apos;ve
          successfully hosted top tier events over the years, including 7
          editions of Career Expo that have had reputable names like Godwin
          Emefiele, Akinwunmi Ambode in presence, MSA Annual Entrepreneurship &
          Innovation Challenge that have over the past 5 editions granted over
          N5 million in cash prizes to students with innovative ideas, MSA -
          Jobberman Softskill Training, MSA Alumni Award and Networking Dinner
          and MSA Annual Dinner & Award Night.
        </p>
      </div>
    </div>
  );
};

export default Modal;
