import React from 'react';
import { contentAtom } from '../../atom/contentAtom';
import { useRecoilValue } from 'recoil';
import styles from '../../styles/Preview.module.css';

const Preview = () => {
  const input = useRecoilValue(contentAtom);
  return (
    <div className={styles.preview__container}>
      <h1>{input.title}</h1>
      <hr />
      <p>
        Written by {input.author} on {new Date().toDateString()}
      </p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: input.content }}
      />
    </div>
  );
};

export default Preview;
