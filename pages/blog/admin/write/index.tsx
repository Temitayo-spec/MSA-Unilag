import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import styles from './page.module.css';
import { useRecoilState } from 'recoil';
import { contentAtom, ContentAtomType } from '../../../../atom/contentAtom';
// dynamically import ReactQuill
import dynamic from 'next/dynamic';
import Preview from '../../../../components/Preview';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const Write = () => {
  const [input, setInput] = useRecoilState<ContentAtomType>(contentAtom);
  const [openPreview, setOpenPreview] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.publish__button}>
          <button type="submit">Publish</button>
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

export default Write;
