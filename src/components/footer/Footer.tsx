import * as React from 'react';

import { Container } from 'components/container/Container';

import s from './Footer.scss';
import s_logo from '../header/Header.scss'

interface ISocial {
  icon: React.ReactNode;
  to: string;
}

interface IFooterProps {
  logo: React.ReactNode;
  social: ISocial[];
}

export const Footer = ({ }: IFooterProps) => (
  <div className={s.footer}>
    <Container>
      <div className={s.footer__content}>
        
        <div className={s.footer__container}> 
          <p className={s_logo.header__logo}>L<span className={s_logo.header__green}>oo</span>ps</p>
          <a className={s.footer__contact} href="to:alex@hireloops.com">Email Us</a> 
        </div>
      

        {/* <ul className={s.footer__list}>
          {social.map((item) => (
            <li
              key={item.to}
              className={s.footer__item}
            >
              <a
                href={item.to}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            </li>
          ))}
        </ul> */}
      </div>
    </Container>
  </div>
);
