import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import 'react-quill/dist/quill.snow.css';
import styles from './page.module.css';
import { useRecoilState } from 'recoil';
import { toast } from 'react-toastify';

// dynamically import ReactQuill
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import LargeSpinner from '../../../components/LargeSpinner';
import Preview from '../../../components/Blog/Preview';
import { contentAtom, ContentAtomType } from '../../../atom/contentAtom';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const Update = ({ blogData }: any) => {
  const [input, setInput] = useRecoilState<ContentAtomType>(contentAtom);
  const [openPreview, setOpenPreview] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const cookie = new Cookies();
  const router = useRouter();


  useEffect(() => {
    setInput({
      title: blogData?.title,
      content: blogData?.content,
      author: blogData?.author,
    });
  }, [blogData?.author, blogData?.content, blogData?.title, setInput]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.put(`/api/blog/update/${router.query.id}`, {
        title: input.title,
        content: input.content,
      });
      if (res.status === 200) {
        setLoading(false);
        toast.success('Post updated successfully!');
        router.push('/admin');
      }
    } catch (err: any) {
      setLoading(false);
      toast.error(err?.response.data.err);
    }
  };

  useEffect(() => {
    if (cookie.get('token')) {
      return;
    } else {
      router.push('/blog/admin/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <LargeSpinner />;
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Update Post</h1>
      </header>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.publish__button}>
          <button type="submit">Update</button>
          <button type="button" onClick={() => setOpenPreview(!openPreview)}>
            {openPreview ? 'Edit' : 'Preview'}
          </button>
        </div>
        {
          // if openPreview is true, show Preview component
          openPreview ? (
            <Preview />
          ) : (
            <>
              <div className={styles.form__group}>
                <label htmlFor="title">Title</label>
                <input
                  className={styles.form__input}
                  type="text"
                  name="title"
                  id="title"
                  placeholder='e.g. "My first blog post"'
                  value={input.title}
                  onChange={(e) =>
                    setInput({ ...input, title: e.target.value })
                  }
                />
              </div>
              <div className={styles.form__group}>
                <label htmlFor="content">Content</label>
                <ReactQuill
                  theme="snow"
                  className={styles.form__quill}
                  value={input.content}
                  onChange={(value) => setInput({ ...input, content: value })}
                />
              </div>
            </>
          )
        }
      </form>
    </div>
  );
};

export default Update;

export const getServerSideProps = async (context: { params: { id: any; }; }) => {
  const res = await axios.get(
    `${
      process.env.NEXT_PUBLIC_NODE_ENV === 'development'
        ? 'http://localhost:3000'
        : 'https://msaunilag.com'
    }/api/blog/${context.params.id}`
  );
  return {
    props: {
      blogData: res.data,
    },
  };
};
