import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Content } from '../../../components/Blog/Content';
import styles from './page.module.css';

export const getServerSideProps = async (context: any) => {
  const res = await axios.get(
    `${
      process.env.NEXT_PUBLIC_NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : 'https://msaunilag.com'
    }/api/blog/${context.params.blogs}`
  );
  return {
    props: {
      blog: res.data,
    },
  };
};

const Page = ({ blog }: any) => {
  const router = useRouter();

  return (
    <div className={styles.wrapper}>
      <button type="button" onClick={() => router.back()}>
        <span>Back</span>{' '}
        <span>
          <FaArrowLeft />
        </span>
      </button>

      <div className={styles.main__content}>
        <h2>{blog?.title}</h2>
        <Content className={styles.content} content={blog?.content} />
        <div className={styles.bottom}>
          <p>Written by {blog?.author}</p>
        </div>
      </div>
    </div>
  );
};

export default Page;
