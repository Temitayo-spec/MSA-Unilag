import { useRouter } from 'next/router';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { BlogData } from '../../../components/Data/BlogData';
import { Content } from '../../../components/Blog/Content';
import styles from './page.module.css';

interface Props {
  params: {
    blogs: string;
  };
}

// get the blog title from the url
// filter the blog data to get the blog with the same title
// render the blog
const Page = () => {
  const router = useRouter();
  const { query } = useRouter();
  const str = query.blogs as string;
  return (
    <div className={styles.wrapper}>
      <button type="button" onClick={() => router.back()}>
        <span>Back</span>{' '}
        <span>
          <FaArrowLeft />
        </span>
      </button>
      {BlogData.filter((item) => item.title === str).map((item, index) => {
        return (
          <div className={styles.main__content} key={index}>
            <h2>{item.title}</h2>
            <Content className={styles.content} content={item.content} />
            <div className={styles.bottom}>
              <p>{item.category}</p>
              <p>{item.author}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
