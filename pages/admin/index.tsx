import axios from 'axios';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';
import LargeSpinner from '../../components/LargeSpinner';
import styles from './page.module.css';

const Admin = ({ blogData }: any) => {
  const router = useRouter();
  const handleDelete = async (id: string | string[] | undefined) => {
    try {
      setLoading(true);
      const res = await axios.delete(`/api/blog/delete/${id}`);
      if (res.status === 200) {
        setLoading(false);
        toast.success('Post deleted successfully!');
        router.push('/admin');
      }
    } catch (err: any) {
      setLoading(false);
      toast.error(err?.response.data.err);
    }
  };
  const [loading, setLoading] = useState<boolean>(false);
  if (loading) return <LargeSpinner />;
  return (
    <>
      <div className={styles.write__post}>
        <Link href="/blog/admin/write">
          <FaPencilAlt className={styles.icon} />
        </Link>
      </div>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <h1>Admin</h1>
          <p>This is to delete blog posts and add new ones.</p>
        </header>
        <main className={styles.main}>
          <table className={styles.table}>
            <tr className={styles.tr}>
              <th className={styles.th}>Title</th>
              <th className={styles.th}>Author</th>
              <th className={styles.th}>Actions</th>
            </tr>
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
                    <tr key={index} className={styles.tr}>
                      <td className={`${styles.td} ${styles.bold}`}>
                        {item.title}
                      </td>
                      <td className={styles.td}>{item.author}</td>
                      <td className={`${styles.td} ${styles.btn__ctn}`}>
                        <button
                          type="button"
                          onClick={() => handleDelete(item._id)}
                        >
                          <FaTrashAlt className={styles.icon} />
                        </button>
                        <Link href={`/admin/update/${item._id}`}>
                          <FaPencilAlt className={styles.icon} />
                        </Link>
                      </td>
                    </tr>
                  );
                }
              )
            ) : (
              <tr className={styles.tr}>
                <td className={styles.td}>No posts yet</td>
              </tr>
            )}
          </table>
        </main>
      </div>
    </>
  );
};

export default Admin;

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
