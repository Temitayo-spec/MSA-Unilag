import styles from './page.module.css';

const Login = () => {
  return (
    <div className={styles.wrapper}>
      <form className={styles.form}>
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
          />
        </div>
        <button className={styles.form__button} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
