import * as React from 'react';
import s from './thankyou.scss';
import { Link } from 'gatsby';
import logo from "../components/header/Header.scss";

export default () => (
  <>
    <div className={s.container}>
          <p className={logo.header__logo}>Loops.</p>
          <p className={s.paragraph}> Thank you! We will contact you soon.</p>  
          <Link className={s.link} to="/">Home page</Link>
    </div>
  </>
);
