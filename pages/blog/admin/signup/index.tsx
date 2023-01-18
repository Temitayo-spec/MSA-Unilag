import React from 'react';
import axios from 'axios';

const SignUp = () => {
  const [value, setValue] = React.useState({
    name: '',
    password: '',
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await axios.post('/api/blog/signup/admin', value);

    if (res.status === 200) {
      alert('Success!');
    } else {
      alert('Failed!');
    }
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={value.name}
          onChange={(e) => setValue({ ...value, name: e.target.value })}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={value.password}
          onChange={(e) => setValue({ ...value, password: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUp;
