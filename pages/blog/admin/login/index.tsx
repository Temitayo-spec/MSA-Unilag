import styles from './page.module.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Spinner from '../../../../components/Spinner';

const Login = () => {
  const cookies = new Cookies();
  const router = useRouter();
  const [user, setUser] = useState({
    name: '',
    password: '',
    loading: false,
  });
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setUser({ ...user, loading: true });
      const res = await axios.post('/api/blog/login/admin', user);
      if (res.status === 200) {
        cookies.set('token', res.data.token);
        cookies.set('name', res.data.user.name);

        toast.success('Login success!');
        router.push('/blog/admin/write'); // redirect to admin page after login success
        toast.success('Redirecting to writing page...');
        setUser({ ...user, loading: false });
      }
    } catch (error) {
      setUser({ ...user, loading: false });
      toast.error('Invalid Credentials!');
    }
  };

  useEffect(() => {
    if (cookies.get('token')) {
      router.push('/blog/admin/write');
    } else {
      router.push('/blog/admin/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
        <header className={styles.header}>
          <h1 className={styles.form__title}>Make your post</h1>
          <p>
            Only admins are allowed to write blog posts. If you are an admin,
            please login below.
          </p>
        </header>
        <div className={styles.form__group}>
          <label htmlFor="username">Username</label>
          <input
            className={styles.form__input}
            type="text"
            name="username"
            id="username"
            placeholder='e.g. "admin"'
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
          />
        </div>
        <div className={styles.form__group}>
          <label htmlFor="password">Password</label>
          <input
            className={styles.form__input}
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
          />
        </div>
        <button className={styles.form__button} type="submit">
          Login
          {user.loading && (
            <span>
              <Spinner />
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default Login;
