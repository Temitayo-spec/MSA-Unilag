import { useEffect, useRef } from 'react';
import BlogCard from '../../components/Blog/BlogCard';
import gsap from 'gsap';
import styles from './page.module.css';
import Transition from '../../components/Transition';
import { BlogData } from '../../components/Data/BlogData';
import Link from 'next/link';
import { FaPencilAlt } from 'react-icons/fa';

const Page = () => {
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
  });

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
          {BlogData.map((item, index) => {
            return (
              <BlogCard
                key={index}
                title={item.title}
                content={item.content}
                category={item.category}
                author={item.author}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Page;
