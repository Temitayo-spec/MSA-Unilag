import axios from 'axios';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
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
  const [blog, setBlog] = React.useState<any>(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`/api/blog/${router.query.blogs}`);
      setBlog(result.data);
    };

    fetchData();
  }, []);

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
