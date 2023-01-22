import React from 'react';
import { contentAtom } from '../../atom/contentAtom';
import { useRecoilValue } from 'recoil';
import styles from '../../styles/Preview.module.css';
import Cookies from 'universal-cookie';
import { useRouter } from 'next/router';

const Preview = () => {
  const input = useRecoilValue(contentAtom);
  const author = new Cookies().get('name');
  const { pathname } = useRouter();
  return (
    <div className={styles.preview__container}>
      <h1>{input.title}</h1>
      <p>
        {pathname.includes('update') ? 'Updated by' : 'Written by'} {''}
        {pathname.includes('update') ? input.author : author} on{' '}
        {new Date().toDateString()}
      </p>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: input.content }}
      />
    </div>
  );
};

export default Preview;
