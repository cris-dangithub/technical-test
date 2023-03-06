import React from 'react';
import './styles/footer.css';

const Footer = () => {
  return (
    <footer className="c-footer">
      <h2 className="footer__title">All rights reserved ©</h2>
      <ul className="footer__list">
        <li className="footer__item">
          <a
            className="footer__icon-btn"
            href="https://www.linkedin.com/in/cristian-munoz-/"
            target="_blank"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
        </li>
        <li className="footer__item">
          <a
            className="footer__icon-btn"
            href="https://portfolio-cris.netlify.app/"
            target="_blank"
          >
            <i className="fa-solid fa-briefcase"></i>
          </a>
        </li>
        <li className="footer__item">
          <a
            className="footer__icon-btn"
            href="https://github.com/cris-dangithub/technical-test"
            target="_blank"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
