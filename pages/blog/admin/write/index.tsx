import React, { useState, useEffect } from 'react';
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
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const Write = () => {
  const [input, setInput] = useRecoilState<ContentAtomType>(contentAtom);
  const [openPreview, setOpenPreview] = useState<boolean>(false);
  const cookie = new Cookies();
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
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
