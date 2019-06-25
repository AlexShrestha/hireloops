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
        
        <div> 
          <p className={s_logo.header__logo}>L<span className={s_logo.header__green}>oo</span>ps</p>
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
