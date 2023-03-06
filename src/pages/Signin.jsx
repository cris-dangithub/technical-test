import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import './styles/signin.css';

const Signin = () => {
  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm();
  const { server } = useSelector(state => state);

  const submit = data => {
    data.id = new Date().getTime();
    server.signin(data);
    swal({ text: 'User created successfully', icon: 'success' }).then(res =>
      navigate('/')
    );
    server.login(data.email, data.password);
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
                placeholder="Name"
                className="signin-input"
                type="text"
                id="name"
                {...register('name')}
                required
              />
            </div>
            <div className="signin-input-container">
              <label className="signin-label" htmlFor="email">
                <i className="signin-icon fa-regular fa-envelope"></i>
              </label>
              <input
                placeholder="email@example.com"
                className="signin-input"
                type="email"
                id="email"
                {...register('email')}
                required
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
                required
              />
            </div>
            <button className="signin-btn">Create an account</button>
            <p className="signin-link">
              Do you have an account? Please,{' '}
              <Link to="/login">Login here</Link>
            </p>
          </form>
        </section>
      </div>
    </section>
  );
};

export default Signin;
