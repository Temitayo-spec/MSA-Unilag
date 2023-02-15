import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import BlogCard from '../../components/Blog/BlogCard';
import gsap from 'gsap';
import styles from './page.module.css';
import Transition from '../../components/Transition';
import Link from 'next/link';
import { FaPencilAlt } from 'react-icons/fa';

export const getServerSideProps = async () => {
  const res = await axios.get(
    `${
      process.env.NEXT_PUBLIC_NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : 'https://msaunilag.com'
    }/api/blog/all_blogs`
  );

  return {
    props: {
      blogData: res.data,
    },
  };
};

const Page = ({ blogData }: any) => {
  const blog = gsap.timeline();
  const blogCtn = useRef(null);

  useEffect(() => {
    blog.to(
      blogCtn.current,
      {
        duration: 0.5,
        scaleY: 1,
        opacity: 1,
        ease: 'power3.out',
        transformOrigin: 'top',
      },
      '-=0.5'
    );
  }, []);

  return (
    <>
      <div className={styles.write__post}>
        <Link href="/blog/admin/login">
          <FaPencilAlt className={styles.icon} />
        </Link>
      </div>
      <Transition timeline={blog} text="Blog" />
      <div className={styles.wrapper} ref={blogCtn}>
        <div className={styles.content}>
          {blogData.length > 0 ? (
            blogData?.map(
              (
                item: {
                  _id: any;
                  title: string;
                  content: string;
                  author: string;
                },
                index: string | number
              ) => {
                return (
                  <BlogCard
                    key={index}
                    title={item.title}
                    content={item.content}
                    author={item.author}
                    id={item._id}
                  />
                );
              }
            )
          ) : (
            <h1 className={styles.no__post}>No blog posts yet</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
