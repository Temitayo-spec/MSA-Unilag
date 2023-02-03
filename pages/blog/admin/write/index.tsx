import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import 'react-quill/dist/quill.snow.css';
import styles from './page.module.css';
import { useRecoilState } from 'recoil';
import { toast } from 'react-toastify';
import { contentAtom, ContentAtomType } from '../../../../atom/contentAtom';
// dynamically import ReactQuill
import dynamic from 'next/dynamic';
import Preview from '../../../../components/Blog/Preview';
import { useRouter } from 'next/router';
import LargeSpinner from '../../../../components/LargeSpinner';
import { formats, modules } from '../../../../config/module';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const Write = () => {
  const [input, setInput] = useRecoilState<ContentAtomType>(contentAtom);
  const [openPreview, setOpenPreview] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const cookie = new Cookies();
  const router = useRouter();
  const author = cookie.get('name');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post('/api/blog/write/admin', {
        title: input.title,
        content: input.content,
        author: author,
      });
      if (res.status === 200) {
        setLoading(false);
        toast.success(res.data.message);
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

  const logout = () => {
    if (confirm('Are you sure you want to logout?')) {
      toast.success('Logout success!');
      cookie.remove('token');
      cookie.remove('name');
      router.push('/blog/admin/login');
    }
  };

  if (loading) return <LargeSpinner />;
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.publish__button}>
          <button type="submit">Publish</button>
          <button type="button" onClick={() => setOpenPreview(!openPreview)}>
            {openPreview ? 'Edit' : 'Preview'}
          </button>
          <button type="button" onClick={logout}>
            Logout
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
                  modules={modules}
                  formats={formats}
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

export default Write;
