import Link from 'next/link';
import React from 'react';
import styles from '../../styles/BlogCard.module.css';
import { Content } from './Content';

interface Props {
  title: string;
  content: string;
  category?: string;
  author: string;
  id: string;
}

const Card = ({ title, content, category, author, id }: Props) => {
  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str;
  };
  return (
    <div className={styles.wrapper}>
      <Link href={`/blog/${id}`}>{title}</Link>
      <div className={styles.article}>
        <p>
          Article By {author}
        </p>
        <Content
          className={styles.card__content}
          content={truncate(content, 150)}
        />
      </div>
      <Link href={`/blog/${id}`}>Read More &gt;&gt;&gt;</Link>
    </div>
  );
};

export default Card;
