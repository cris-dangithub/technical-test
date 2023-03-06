import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

const Login = () => {
  const [errorLogin, setErrorLogin] = useState(false);
  const { server } = useSelector(state => state);
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const submit = data => {
    if (server.login(data.email, data.password)) {
      reset({ email: '', password: '' });
      swal({ text: 'Logged successfully', icon: 'success' }).then(res =>
        navigate('/')
      );
      return;
    }
    setErrorLogin(true);
    setTimeout(() => {
      setErrorLogin(false);
    }, 5000);
  };

  return (
    <section className="c-Signin">
      <div className="signin-container">
        <img className="signin-img" src="img/auth.jpg" alt="auth img" />
        <section className="signin__form-container">
          <h2 className="signin-title">WELCOME!</h2>
          <form className="signin-form" onSubmit={handleSubmit(submit)}>
            <div className="signin-input-container">
              <label className="signin-label" htmlFor="email">
                <i className="signin-icon fa-regular fa-user"></i>
              </label>
              <input
                placeholder="email@example.com"
                className="signin-input"
                type="email"
                id="email"
                {...register('email')}
              />
            </div>
            <div className="signin-input-container">
              <label className="signin-label" htmlFor="password">
                <i className="signin-icon fa-solid fa-key"></i>
              </label>
              <input
                placeholder="Password"
                className="signin-input"
                type="password"
                id="password"
                {...register('password')}
              />
            </div>
            <p
              className="signin-error"
              style={errorLogin ? {} : { display: 'none' }}
            >
              Incorrect email or password
            </p>
            <button className="signin-btn">Log in</button>
            <p className="signin-link">
              Don't you have an account? Please,{' '}
              <Link to="/signin">Sign in here</Link>
            </p>
          </form>
        </section>
      </div>
    </section>
  );
};

export default Login;
