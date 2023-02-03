import React from 'react';
import axios from 'axios';
import styles from './page.module.css';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import Spinner from '../../../../components/Spinner';

const SignUp = () => {
  const [value, setValue] = React.useState({
    name: '',
    password: '',
    confirmPassword: '',
    loading: false,
  });

  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.password !== value.confirmPassword) {
      toast.error('Password does not match!');
      return;
    }

    try {
      setValue({ ...value, loading: true });
      const res = await axios.post('/api/blog/signup/admin', value);
      if (res.status === 200) {
        toast.success('Signup success!');
        router.push('/blog/admin/login'); // redirect to admin page after login success
        setValue({ ...value, loading: false });
      }
    } catch (error) {
      setValue({ ...value, loading: false });
      toast.error('Invalid Credentials!');
    }
  };

  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={onSubmit}>
        <header className={styles.header}>
          <h1 className={styles.form__title}>Sign up as an Admin</h1>
          <p>
            Only admins are allowed to write blog posts. If you are an admin,
            please signup below.
          </p>
        </header>
        <div className={styles.form__group}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={value.name}
            onChange={(e) => setValue({ ...value, name: e.target.value })}
            className={styles.form__input}
          />
        </div>
        <div className={styles.form__group}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={value.password}
            onChange={(e) => setValue({ ...value, password: e.target.value })}
            className={styles.form__input}
          />
        </div>
        <div className={styles.form__group}>
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            value={value.confirmPassword}
            onChange={(e) =>
              setValue({ ...value, confirmPassword: e.target.value })
            }
            className={styles.form__input}
          />
        </div>
        <button className={styles.form__button} type="submit">
          Signup
          {value.loading && (
            <span>
              <Spinner />
            </span>
          )}
        </button>
      </form>
    </div>
  );
};

export default SignUp;