import { useCallback, useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import axios from 'axios';
import BlogCard from '../../components/Blog/BlogCard';
import gsap from 'gsap';
import styles from './page.module.css';
import Transition from '../../components/Transition';
import Link from 'next/link';
import { FaPencilAlt } from 'react-icons/fa';
import { blogAtom } from '../../atom/blogAtom';
import { toast } from 'react-toastify';

const Page = () => {
  const [blogData, setBlogData] = useRecoilState(blogAtom);
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

  const getBlog = async () => {
    try {
      const res = await axios.get('/api/blog/all_blogs');
      setBlogData(res.data);
    } catch (err) {
      toast.error('Something went wrong!');
    }
  };
  useEffect(() => {
    getBlog();
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
          {blogData?.map(
            (
              item: {
                _id: any; title: string; content: string; author: string 
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
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
